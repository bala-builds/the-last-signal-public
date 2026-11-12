import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DESTINATIONS, MISSIONS, ACTIVE_MISSIONS, ACTIVE_NO, ACTIVE_NAME, ACTIVE_BLURB, missionsFor, searchMissions } from './missions';

// Categorised MISSIONS navigation. Desktop: editorial mega-menu with search and four
// category cards. Mobile (<=800px, via CSS): accordion sections with a search on top.
// Every category opens the dedicated mission archive (/missions/archive); the flat
// 40+ entry list is never shown all at once.
export default function MissionsMenu() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const rootRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const loc = useLocation();
  useEffect(() => { setOpen(false); setQ(''); }, [loc.pathname, loc.hash]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); toggleRef.current?.focus(); }
    };
    const onPointer = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onPointer);
    };
  }, [open]);

  const query = q.trim();
  const results = query ? searchMissions(query) : null;

  return <div className="missions-menu" ref={rootRef}>
    <button ref={toggleRef} className="missions-toggle" aria-expanded={open} aria-haspopup="true" aria-controls="missions-panel" onClick={() => setOpen(!open)}>MISSIONS ⌄</button>
    {open && <div className="mega" id="missions-panel" role="dialog" aria-label="Mission navigation" data-lenis-prevent>
      <div className="mega-search">
        <label>FIND A MISSION
          <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={`SEARCH ${MISSIONS.length} MISSIONS...`} autoFocus />
        </label>
      </div>

      {results && <div className="mega-results" role="list">
        {results.length === 0 && <p className="mega-none">No mission matches “{query}”. Try another name.</p>}
        {results.map((m) => <Link role="listitem" key={m.id} to={`/${m.id}`} className="mega-hit">
          <span className="mega-hit-name">{m.name}</span>
          <span className="mega-hit-meta">{m.no} / {m.world.toUpperCase()}{m.active ? ' / STILL EXPLORING' : ''}</span>
        </Link>)}
      </div>}

      {!results && <div className="mega-grid">
        {DESTINATIONS.map((d) => <Link key={d.id} className="mega-cat" to={`/missions/archive?dest=${d.id}`}>
          <small>{d.no} / DESTINATION</small>
          <h3>{d.name}</h3>
          <p>{d.blurb}</p>
          <span>{String(d.ids.length).padStart(2, '0')} MISSIONS ⟶</span>
        </Link>)}
        <Link className="mega-cat mega-status" to="/missions/archive?status=active">
          <small>{ACTIVE_NO} / STATUS FILTER</small>
          <h3>{ACTIVE_NAME}</h3>
          <p>{ACTIVE_BLURB}</p>
          <span>{String(ACTIVE_MISSIONS.length).padStart(2, '0')} ACTIVE MISSIONS ⟶</span>
        </Link>
      </div>}

      {!results && <div className="mega-foot">
        <Link to="/missions/archive">OPEN THE MISSION ARCHIVE ↗</Link>
        <Link to="/machines">ALL {MISSIONS.length} MISSIONS / FULL DIRECTORY ↗</Link>
      </div>}

      {!results && <div className="mega-acc">
        {DESTINATIONS.map((d) => <details key={d.id} className="acc">
          <summary><span>{d.no} / {d.name}</span><b>{String(d.ids.length).padStart(2, '0')}</b></summary>
          <div className="acc-list">
            {missionsFor(d.id).map((m) => <Link key={m.id} to={`/${m.id}`}><span>{m.name}</span>{m.active && <i>ACTIVE</i>}</Link>)}
            <Link className="acc-open" to={`/missions/archive?dest=${d.id}`}>OPEN {d.name} ARCHIVE ↗</Link>
          </div>
        </details>)}
        <details className="acc">
          <summary><span>{ACTIVE_NO} / {ACTIVE_NAME}</span><b>{String(ACTIVE_MISSIONS.length).padStart(2, '0')}</b></summary>
          <div className="acc-list">
            {ACTIVE_MISSIONS.map((m) => <Link key={m.id} to={`/${m.id}`}><span>{m.name}</span><i>ACTIVE</i></Link>)}
            <Link className="acc-open" to="/missions/archive?status=active">OPEN ACTIVE MISSIONS ↗</Link>
          </div>
        </details>
        <Link className="acc-all" to="/machines">ALL {MISSIONS.length} MISSIONS / FULL DIRECTORY ↗</Link>
      </div>}
    </div>}
  </div>;
}
