import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Frame } from './Site';
import { MISSIONS, DESTINATIONS, STATUS_FILTERS } from './missions';

// Dedicated mission archive: search + destination and status filters over the existing
// mission data. Status labels only group each mission's verified record - the record's
// own words are shown with it. Deep-linkable via ?dest= &status= &q=.
export default function MissionArchive() {
  const [params, setParams] = useSearchParams();
  const dest = params.get('dest') ?? 'all';
  const status = params.get('status') ?? 'all';
  const q = params.get('q') ?? '';

  const setParam = (key: string, value: string) => {
    const p = new URLSearchParams(params);
    if (!value || value === 'all') p.delete(key); else p.set(key, value);
    setParams(p, { replace: true });
  };

  const needle = q.trim().toLowerCase();
  const filtered = MISSIONS.filter((m) =>
    (dest === 'all' || m.dest === dest) &&
    (status === 'all' || m.statusSlug === status) &&
    (!needle || m.name.toLowerCase().includes(needle) || m.world.toLowerCase().includes(needle) || m.years.toLowerCase().includes(needle)));

  return <Frame>{() => <section className="wrap page-section mission-archive">
    <p className="eyebrow">MISSION ARCHIVE / SEARCH AND FILTERS</p>
    <h1>EVERY SIGNAL,<br />IN ORDER.</h1>
    <p className="lede">All {MISSIONS.length} documented missions in one place. Search by name, filter by destination or verified status, and open the story you want.</p>

    <form className="filters ma-search" onSubmit={(e) => e.preventDefault()}>
      <label className="search">Search missions
        <input type="search" value={q} onChange={(e) => setParam('q', e.target.value)} placeholder="Mission name, world or years" />
      </label>
      <button type="button" className="outline" onClick={() => setParams(new URLSearchParams(), { replace: true })}>RESET</button>
    </form>

    <p className="ma-label">DESTINATION</p>
    <div className="ma-chips" role="group" aria-label="Destination filters">
      <button aria-pressed={dest === 'all'} onClick={() => setParam('dest', 'all')}>ALL</button>
      {DESTINATIONS.map((d) => <button key={d.id} aria-pressed={dest === d.id} onClick={() => setParam('dest', d.id)}>{d.name}</button>)}
    </div>
    <p className="ma-label">MISSION STATUS</p>
    <div className="ma-chips" role="group" aria-label="Mission status filters">
      <button aria-pressed={status === 'all'} onClick={() => setParam('status', 'all')}>ALL</button>
      {STATUS_FILTERS.map((s) => <button key={s.slug} aria-pressed={status === s.slug} onClick={() => setParam('status', s.slug)}>{s.label}</button>)}
    </div>

    <p className="result-count" aria-live="polite">{filtered.length} of {MISSIONS.length} missions</p>

    {!filtered.length && <div className="empty"><h2>No matching missions.</h2><p>Try fewer filters or another search.</p></div>}

    <div className="ma-list">
      {filtered.map((m) => <Link className="ma-row" key={m.id} to={`/${m.id}`}>
        <span className="ma-no">{m.no}</span>
        <span className="ma-main">
          <span className="ma-name">{m.name}</span>
          <span className="ma-sub">{m.world.toUpperCase()} / {m.years.toUpperCase()}{m.statusText ? ` — ${m.statusText}` : ''}</span>
        </span>
        <span className={`ma-status st-${m.statusSlug}`}>{m.statusLabel}</span>
      </Link>)}
    </div>

    <div className="callout">Status labels group each mission's own verified record; the record's words stay with it. COMPLETED met its objectives and ended. RETIRED was deliberately switched off or stood down after service. LOST / FAILED lost contact, crashed or could not complete its mission. Active statuses checked 12 November 2026 against the owning NASA mission pages; each record also shows its own earlier check date. For full documented records open the <Link to="/archive" className="ma-inline">REFERENCE LIBRARY ↗</Link>; for the ongoing collection see <Link to="/still-exploring" className="ma-inline">STILL EXPLORING ↗</Link>.</div>
  </section>}</Frame>;
}
