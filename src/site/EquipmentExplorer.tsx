import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import EquipmentCollection from './EquipmentCollection';
import { records } from './archive';
import { activeRecords, activeIds, modelIds } from './films';
import { scrollToAnchor } from './motion';

// Equipment page restructure (release 44): three destination rows expand into a machine
// list; selecting a machine mounts its existing 3D studio (the release-42 viewer is
// reused unchanged - same models, stops, disclaimers and scroll/drag behaviour).
// Machine order and grouping follow the owner's brief; records themselves stay in
// archive.ts / films.ts and are only referenced here.
const art = import.meta.glob('../story-assets/*', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
const a = (s: string) => art['../story-assets/' + s];

type DestId = 'moon' | 'mars' | 'deep-space';
const DESTS: { id: DestId; no: string; name: string; blurb: string; img: string; credit: string; ids: string[] }[] = [
  {
    id: 'moon', no: '01', name: 'THE MOON', blurb: 'Lunar exploration hardware.',
    img: a('bg-sunset.jpg'), credit: 'NASA/Olivia Tyrrell · SCALPSS sunset',
    ids: ['surveyor-3', 'apollo-17-lrv', 'apollo-11-surface', 'apollo-17-surface', 'ladee', 'lro'],
  },
  {
    id: 'mars', no: '02', name: 'MARS', blurb: 'Robotic explorers and orbiters.',
    img: a('per-biosignature.jpg'), credit: 'NASA/JPL-Caltech/MSSS',
    ids: ['opportunity', 'insight', 'maven', 'ingenuity', 'odyssey', 'mro', 'curiosity', 'perseverance'],
  },
  {
    id: 'deep-space', no: '03', name: 'DEEP SPACE', blurb: 'Beyond planetary boundaries.',
    img: a('v1-earthdot.jpg'), credit: 'NASA/JPL',
    ids: ['pioneer-10', 'voyager-1', 'new-horizons'],
  },
];

const recordById = new Map([...records, ...activeRecords].map((r) => [r.id, r]));

export default function EquipmentExplorer({ root }: { root: React.RefObject<HTMLDivElement> }) {
  const [openDest, setOpenDest] = useState<DestId | null>(null);
  const [sel, setSel] = useState<string | null>(null);
  const loc = useLocation();

  // Integrity guard: the three groups must cover every 3D machine exactly once.
  if (typeof console !== 'undefined') {
    const seen = new Set<string>();
    const dup: string[] = [];
    for (const d of DESTS) for (const id of d.ids) { if (seen.has(id)) dup.push(id); seen.add(id); }
    const missing = modelIds.filter((id) => !seen.has(id));
    const unknown = [...seen].filter((id) => !modelIds.includes(id));
    if (dup.length || missing.length || unknown.length) console.error('Equipment taxonomy mismatch', { dup, missing, unknown });
  }

  // Deep links such as /equipment#surveyor-3 (used by stories and records).
  useEffect(() => {
    const id = loc.hash.replace('#', '');
    if (!id) return;
    const dest = DESTS.find((d) => d.ids.includes(id));
    if (dest) { setOpenDest(dest.id); setSel(id); }
  }, [loc.hash]);

  // Bring the selected machine's studio into view once it has mounted.
  useEffect(() => {
    if (!sel || !openDest) return;
    const t = window.setTimeout(() => {
      scrollToAnchor(sel, -80);
    }, 90);
    return () => window.clearTimeout(t);
  }, [sel, openDest]);

  const toggleDest = (id: DestId) => {
    if (openDest === id) { setOpenDest(null); setSel(null); return; }
    setOpenDest(id);
    if (sel && !DESTS.find((d) => d.id === id)!.ids.includes(sel)) setSel(null);
  };

  return <div className="eq-acc">
    {DESTS.map((d) => {
      const open = openDest === d.id;
      return <section className={`eq-dest${open ? ' open' : ''}`} key={d.id}>
        <button className="eq-row" aria-expanded={open} aria-controls={`eq-panel-${d.id}`} onClick={() => toggleDest(d.id)}>
          <span className="eq-art" style={{ backgroundImage: `url(${d.img})` }} aria-hidden="true" />
          <span className="eq-no">{d.no}</span>
          <span className="eq-titles">
            <span className="eq-name">{d.name}</span>
            <span className="eq-blurb">{d.blurb}</span>
          </span>
          <span className="eq-count">{String(d.ids.length).padStart(2, '0')} MACHINES</span>
          <span className="eq-plus" aria-hidden="true" />
        </button>
        <div className="eq-panel" id={`eq-panel-${d.id}`}>
          <div className="eq-panel-in">
            <ol className="eq-list">
              {d.ids.map((id, i) => {
                const r = recordById.get(id)!;
                const active = activeIds.includes(id);
                const meta = `${active ? 'ACTIVE / STILL EXPLORING' : `${('type' in r ? r.type : '').toUpperCase()} / ${('category' in r ? r.category : '').toUpperCase()}`} · LAUNCHED ${r.launch.toUpperCase()}`;
                return <li key={id}>
                  <button className={`eq-machine${sel === id ? ' sel' : ''}`} aria-pressed={sel === id} aria-controls={sel === id ? `eq-studio-${id}` : undefined} onClick={() => setSel(id)}>
                    <span className="eq-idx">{String(i + 1).padStart(2, '0')}</span>
                    <span className="eq-mname">{r.mission}</span>
                    <span className="eq-mmeta">{meta}</span>
                    <span className="eq-go" aria-hidden="true">⟶</span>
                  </button>
                </li>;
              })}
            </ol>
            {sel && d.ids.includes(sel) && <div className="eq-studio" id={`eq-studio-${sel}`}>
              <EquipmentCollection root={root} ids={[sel]} autoStartId={sel} />
            </div>}
          </div>
        </div>
      </section>;
    })}
  </div>;
}
