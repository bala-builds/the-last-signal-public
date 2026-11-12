// Mission navigation taxonomy for THE LAST SIGNAL.
// Categories are ordered ID lists only: mission records live in storyCatalog / records / activeRecords
// and are resolved here, never duplicated. The order matches the owner's navigation brief.
import { storyCatalog, activeIds, activeRecords } from './films';
import { records } from './archive';

export type Dest = 'moon' | 'mars' | 'deep-space';
export type StatusSlug = 'active' | 'completed' | 'lost-failed' | 'retired';

export const DESTINATIONS: { id: Dest; no: string; name: string; blurb: string; ids: string[] }[] = [
  {
    id: 'moon', no: '01', name: 'THE MOON',
    blurb: 'Landers, science stations, rovers and orbiters at our nearest neighbour.',
    ids: ['surveyor-3', 'apollo-17-lrv', 'ranger-7', 'surveyor-1', 'apollo-11-surface', 'apollo-12-surface', 'apollo-14-surface', 'apollo-15-surface', 'apollo-16-surface', 'apollo-17-surface', 'lro', 'lcross', 'ladee', 'grail', 'peregrine-1', 'im-1-odysseus', 'im-2-athena', 'blue-ghost-1', 'lunar-trailblazer'],
  },
  {
    id: 'mars', no: '02', name: 'MARS',
    blurb: 'Rovers, landers and orbiters on and around the red planet.',
    ids: ['viking-1', 'viking-2', 'pathfinder', 'mars-global-surveyor', 'opportunity', 'spirit', 'phoenix', 'insight', 'mars-climate-orbiter', 'mars-polar-lander', 'odyssey', 'mro', 'curiosity', 'maven', 'perseverance', 'perseverance-backshell', 'ingenuity'],
  },
  {
    id: 'deep-space', no: '03', name: 'DEEP SPACE',
    blurb: 'Probes that left the planets behind and kept going.',
    ids: ['pioneer-10', 'pioneer-11', 'voyager-1', 'voyager-2', 'new-horizons'],
  },
];

export const ACTIVE_NO = '04';
export const ACTIVE_NAME = 'STILL EXPLORING';
export const ACTIVE_BLURB = 'A status filter, not a destination: missions whose signals are still coming home, checked against NASA mission pages.';

// Active-status provenance: each ACTIVE mission below was re-verified at the owning
// NASA source on 12 November 2026 (this release), after the per-record checks of
// 11 November 2026 that live in activeRecords in films.ts:
//   lro           - https://science.nasa.gov/mission/lro/ ("is paving the way ... studying the Moon since 2009", 2026 imagery)
//   odyssey       - https://science.nasa.gov/mission/odyssey/ ("continues its work today", 25 years in orbit in 2026)
//   mro           - https://science.nasa.gov/mission/mars-reconnaissance-orbiter/ (image releases through June 2026)
//   curiosity     - https://science.nasa.gov/mission/msl-curiosity/ (milestone dated 26 August 2026, "still operating")
//   perseverance  - https://science.nasa.gov/mission/mars-2020-perseverance/ ("still operating", path update 13 October 2026)
//   voyager-1/-2  - https://science.nasa.gov/mission/voyager/where-are-voyager-1-and-voyager-2-now/ (mission status, Nov 2026 milestone)
//   new-horizons  - https://science.nasa.gov/mission/new-horizons/ + NASA July 2026 wake-from-hibernation article

export const STATUS_FILTERS: { slug: StatusSlug; label: string }[] = [
  { slug: 'active', label: 'ACTIVE' },
  { slug: 'completed', label: 'COMPLETED' },
  { slug: 'lost-failed', label: 'LOST / FAILED' },
  { slug: 'retired', label: 'RETIRED' },
];

// Bucket rule: COMPLETED = met its objectives and ended (data returned / nominal or
// planned end); RETIRED = deliberately switched off or stood down after service
// (e.g. ALSEP commanded off 1977, InSight retirement announced); LOST / FAILED =
// lost contact, crashed or could not complete its mission. Judgement calls are noted
// inline; the record's own words stay on its page and in the mission rows.
const FINISHED_STATUS: Record<string, Exclude<StatusSlug, 'active'>> = {
  'surveyor-3': 'completed',            // "Inactive. Parts, not the whole lander, were returned by Apollo 12."
  'apollo-17-lrv': 'completed',         // "Left at the final parking site on the Moon."
  'opportunity': 'completed',           // "Mission declared complete 13 February 2019."
  'ranger-7': 'completed',              // "Deliberately impacted ... after sending 4,308 images."
  'surveyor-1': 'completed',            // "Primary mission complete."
  'apollo-11-surface': 'completed',     // mixed hardware; seismic stopped Aug 1969, reflector passive
  'apollo-12-surface': 'retired',       // "support and scientific-data receiving ended in 1977."
  'apollo-14-surface': 'lost-failed',   // "Powered ALSEP failed in January 1976."
  'apollo-15-surface': 'retired',       // "ALSEP commanded off in 1977."
  'apollo-16-surface': 'retired',       // "station commanded off in 1977."
  'apollo-17-surface': 'retired',       // "ALSEP commanded off in 1977."
  'lcross': 'completed',                // "deliberately impacted on 9 October 2009."
  'ladee': 'completed',                 // "Intentionally impacted ... after low-altitude science."
  'grail': 'completed',                 // "Both spacecraft intentionally impacted."
  'viking-1': 'lost-failed',            // "contact ended ... after a faulty command. Recovery attempts failed."
  'viking-2': 'completed',              // "Lander mission ended 12 April 1980."
  'pathfinder': 'completed',            // "Final Pathfinder data 27 September 1997."
  'mars-global-surveyor': 'lost-failed',// "Last contact 2 November 2006."
  'spirit': 'lost-failed',              // "Last contact 22 March 2010; NASA ended recontact attempts."
  'phoenix': 'completed',               // "Last contact and listed mission end 2 November 2008."
  'insight': 'retired',                 // "retirement announced 21 December 2022."
  'mars-climate-orbiter': 'lost-failed',// "Lost at Mars arrival on 23 September 1999."
  'mars-polar-lander': 'lost-failed',   // "Lost on arrival December 3, 1999."
  'maven': 'lost-failed',               // "Last contact 6 December 2025 ... mission ended 3 June 2026."
  'perseverance-backshell': 'completed',// "Jettisoned as planned during successful rover landing."
  'ingenuity': 'lost-failed',           // "Permanently grounded by rotor damage after Flight 72."
  'pioneer-10': 'lost-failed',          // "Last telemetry 27 April 2002 ... contact attempt unsuccessful."
  'pioneer-11': 'completed',            // "Mission ended 30 September 1995."
  'peregrine-1': 'lost-failed',         // "a propulsion issue prevented the lunar landing."
  'im-2-athena': 'lost-failed',         // "Landed on its side ... could not recharge its solar cells."
  'im-1-odysseus': 'completed',         // "operations ceased 29 February 2024, seven days after landing."
  'blue-ghost-1': 'completed',          // "Concluded 16 March 2025 after operating through lunar sunset."
  'lunar-trailblazer': 'lost-failed',   // "ended 31 July 2025 without reaching its intended lunar mapping orbit."
};

export type MissionEntry = {
  id: string; no: string; name: string; world: string; years: string;
  dest: Dest; active: boolean; statusSlug: StatusSlug; statusLabel: string; statusText: string;
};

const catalogById = new Map(storyCatalog.map((c) => [c.id, c]));
const recordById = new Map(records.map((r) => [r.id, r]));
const activeById = new Map(activeRecords.map((r) => [r.id, r]));

function entryFor(id: string, dest: Dest): MissionEntry {
  const c = catalogById.get(id)!;
  const active = activeIds.includes(id);
  const slug: StatusSlug = active ? 'active' : (FINISHED_STATUS[id] ?? 'completed');
  const label = STATUS_FILTERS.find((s) => s.slug === slug)!.label;
  const statusText = active ? (activeById.get(id)?.status ?? '') : (recordById.get(id)?.status ?? '');
  return { id, no: c.no, name: c.name, world: c.world, years: c.years, dest, active, statusSlug: slug, statusLabel: label, statusText };
}

export const MISSIONS: MissionEntry[] = DESTINATIONS.flatMap((d) => d.ids.map((id) => entryFor(id, d.id)));

export const ACTIVE_MISSIONS = MISSIONS.filter((m) => m.active);

export function missionsFor(dest: Dest): MissionEntry[] {
  return MISSIONS.filter((m) => m.dest === dest);
}

export function searchMissions(q: string): MissionEntry[] {
  const needle = q.trim().toLowerCase();
  if (!needle) return [];
  return MISSIONS.filter((m) => m.name.toLowerCase().includes(needle) || m.world.toLowerCase().includes(needle) || m.years.toLowerCase().includes(needle));
}

// Integrity guard: the destination lists must cover every catalog mission exactly once.
// Logged, not thrown, so a data drift can never blank the page; verified at build review.
if (typeof console !== 'undefined') {
  const seen = new Set<string>();
  const dup: string[] = [];
  for (const d of DESTINATIONS) for (const id of d.ids) { if (seen.has(id)) dup.push(id); seen.add(id); }
  const missing = storyCatalog.filter((c) => !seen.has(c.id)).map((c) => c.id);
  const unknown = [...seen].filter((id) => !catalogById.has(id));
  if (dup.length || missing.length || unknown.length) console.error('Mission taxonomy mismatch', { dup, missing, unknown });
}
