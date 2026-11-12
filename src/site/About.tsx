import React, { useState, useMemo } from 'react';
import { Frame, Wave } from './Site';
import { records, type RecordInfo } from './archive';
import { activeRecords, storyCatalog, modelIds } from './films';
import './about.css';

// 4 Mission categories for Primary Evidence Library (Section 05)
const LUNAR_IDS = [
  'surveyor-3', 'apollo-17-lrv', 'ranger-7', 'surveyor-1',
  'apollo-11-surface', 'apollo-12-surface', 'apollo-14-surface',
  'apollo-15-surface', 'apollo-16-surface', 'apollo-17-surface',
  'lro', 'lcross', 'ladee', 'grail'
];

const COMMERCIAL_LUNAR_IDS = [
  'peregrine-1', 'im-1-odysseus', 'im-2-athena', 'blue-ghost-1', 'lunar-trailblazer'
];

const MARS_IDS = [
  'viking-1', 'viking-2', 'pathfinder', 'mars-global-surveyor',
  'opportunity', 'spirit', 'phoenix', 'insight',
  'mars-climate-orbiter', 'mars-polar-lander', 'odyssey', 'mro',
  'curiosity', 'maven', 'perseverance', 'perseverance-backshell', 'ingenuity'
];

const DEEP_SPACE_IDS = [
  'pioneer-10', 'pioneer-11', 'voyager-1', 'voyager-2', 'new-horizons'
];

interface MissionSourceGroup {
  id: string;
  mission: string;
  category: 'lunar' | 'commercial' | 'mars' | 'deep-space';
  categoryLabel: string;
  sources: { t: string; href: string }[];
}

function getHostname(urlStr: string): string {
  try {
    return new URL(urlStr).hostname.replace(/^www\./, '');
  } catch {
    return 'nasa.gov';
  }
}

export default function About() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    'lunar': true,
    'commercial': true,
    'mars': true,
    'deep-space': true,
  });
  const [expandedMissions, setExpandedMissions] = useState<Record<string, boolean>>({});

  // Compile all mission sources from archive records and active records
  const allMissionGroups: MissionSourceGroup[] = useMemo(() => {
    const list: MissionSourceGroup[] = [];
    const recordMap = new Map<string, RecordInfo>(records.map(r => [r.id, r]));

    const addMission = (id: string, cat: 'lunar' | 'commercial' | 'mars' | 'deep-space', catLabel: string) => {
      const rec = recordMap.get(id);
      const active = activeRecords.find(a => a.id === id);
      
      let missionName = rec ? rec.mission : (active ? active.mission : id);
      let sources: { t: string; href: string }[] = [];

      if (rec && rec.sources && rec.sources.length > 0) {
        sources = [...rec.sources];
      } else if (active && active.source) {
        sources = [{ t: `${active.mission} — NASA Mission Overview`, href: active.source }];
      }

      if (sources.length > 0) {
        list.push({
          id,
          mission: missionName,
          category: cat,
          categoryLabel: catLabel,
          sources
        });
      }
    };

    LUNAR_IDS.forEach(id => addMission(id, 'lunar', 'Lunar Missions'));
    COMMERCIAL_LUNAR_IDS.forEach(id => addMission(id, 'commercial', 'Commercial Lunar Missions'));
    MARS_IDS.forEach(id => addMission(id, 'mars', 'Mars Missions'));
    DEEP_SPACE_IDS.forEach(id => addMission(id, 'deep-space', 'Deep Space Missions'));

    return list;
  }, []);

  // Filter groups and missions based on search query
  const filteredMissions = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return allMissionGroups;

    return allMissionGroups
      .map(m => {
        const missionMatches = m.mission.toLowerCase().includes(q) || m.categoryLabel.toLowerCase().includes(q);
        const matchingSources = m.sources.filter(s => 
          s.t.toLowerCase().includes(q) || 
          s.href.toLowerCase().includes(q) ||
          getHostname(s.href).toLowerCase().includes(q)
        );

        if (missionMatches) {
          return m;
        }
        if (matchingSources.length > 0) {
          return { ...m, sources: matchingSources };
        }
        return null;
      })
      .filter((m): m is MissionSourceGroup => m !== null);
  }, [allMissionGroups, searchQuery]);

  // Total references count
  const totalRefCounts = useMemo(() => {
    return filteredMissions.reduce((acc, m) => acc + m.sources.length, 0);
  }, [filteredMissions]);

  const isMissionOpen = (id: string) => {
    if (searchQuery.trim().length > 0) return true;
    return !!expandedMissions[id];
  };

  const toggleGroup = (cat: string) => {
    setExpandedGroups(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  const toggleMission = (id: string) => {
    setExpandedMissions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const g: Record<string, boolean> = { 'lunar': true, 'commercial': true, 'mars': true, 'deep-space': true };
    const m: Record<string, boolean> = {};
    allMissionGroups.forEach(item => { m[item.id] = true; });
    setExpandedGroups(g);
    setExpandedMissions(m);
  };

  const collapseAll = () => {
    setExpandedGroups({ 'lunar': false, 'commercial': false, 'mars': false, 'deep-space': false });
    setExpandedMissions({});
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Group filtered missions by category
  const groupedByCategory = useMemo(() => {
    return {
      lunar: filteredMissions.filter(m => m.category === 'lunar'),
      commercial: filteredMissions.filter(m => m.category === 'commercial'),
      mars: filteredMissions.filter(m => m.category === 'mars'),
      'deep-space': filteredMissions.filter(m => m.category === 'deep-space'),
    };
  }, [filteredMissions]);

  return (
    <Frame>
      {() => (
        <section className="wrap page-section about-redesign">
          {/* Minimalist Section Navigation Strip */}
          <nav className="about-dir-nav" aria-label="About section jump links">
            <span className="dir-label">SECTION DIRECTORY /</span>
            <button onClick={() => scrollTo('sec-01')}>01 THE PROJECT</button>
            <span className="dir-dot">·</span>
            <button onClick={() => scrollTo('sec-02')}>02 IMAGERY & MOTION</button>
            <span className="dir-dot">·</span>
            <button onClick={() => scrollTo('sec-03')}>03 METHODOLOGY</button>
            <span className="dir-dot">·</span>
            <button onClick={() => scrollTo('sec-04')}>04 ACCESSIBILITY</button>
            <span className="dir-dot">·</span>
            <button onClick={() => scrollTo('sec-05')}>05 REFERENCES</button>
            <span className="dir-dot">·</span>
            <button onClick={() => scrollTo('sec-06')}>06 CREDITS</button>
          </nav>

          {/* Page Hero */}
          <header className="about-header">
            <p className="eyebrow">ABOUT THE PROJECT</p>
            <h1>HISTORY,<br />NOT MYTHOLOGY.</h1>
            <p className="lede">
              An independent interactive archive and educational storytelling site dedicated to NASA's distant explorers.
            </p>
            <div className="about-wave" aria-hidden="true">
              <Wave active={true} variant={0} />
            </div>
          </header>

          {/* 01 — THE PROJECT */}
          <article id="sec-01" className="about-block">
            <div className="block-meta">
              <span className="block-num">01</span>
              <span className="block-tag">THE PROJECT</span>
            </div>
            <div className="block-body">
              <h2>History, Not Mythology.</h2>
              <div className="editorial-columns">
                <div>
                  <p>
                    <strong>THE LAST SIGNAL</strong> is an educational storytelling archive created to document humanity’s 
                    distant explorers with scientific, factual and historical fidelity. Space exploration is too often 
                    reduced to soundbites or retold as romanticized myth. This archive exists to return to the original 
                    evidence: the verified engineering records, planetary photography, mission timelines, and scientific 
                    discoveries that define each spacecraft’s historical journey.
                  </p>
                  <p>
                    Every machine had a mission; every mission left a story. Silence across deep space is not an absence 
                    of meaning. Whether resting on lunar plains, weathered by Martian dust storms, or traveling through the 
                    heliopause into interstellar space, each robotic and crewed explorer left an enduring legacy that altered 
                    how humanity sees the cosmos.
                  </p>
                </div>
                <div>
                  <h3>MORE THAN MACHINES</h3>
                  <p>
                    THE LAST SIGNAL tells <strong>{storyCatalog.length} mission stories</strong>: {storyCatalog.map(c => c.name).join(', ')}. 
                    Each story contains 8–12 illustrated scenes grounded in primary source documentation.
                  </p>
                  <p>
                    The technical archive contains <strong>{records.length} concluded mission records</strong> spanning the Moon, 
                    Mars, and deep space, and <strong>{modelIds.length} inspectable 3D models</strong> in an authentic Three.js exterior study viewer. 
                    <strong>{activeRecords.length} active-mission records</strong> are maintained separately in <em>Still Exploring</em>, 
                    distinguishing ongoing journeys from concluded history.
                  </p>
                  <p className="editorial-note">
                    Empty filters in the archive are presented honestly, rather than filled with unverified speculation.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* 02 — IMAGERY & MOTION */}
          <article id="sec-02" className="about-block">
            <div className="block-meta">
              <span className="block-num">02</span>
              <span className="block-tag">IMAGERY & MOTION</span>
            </div>
            <div className="block-body">
              <h2>Evidence and Illustrative Art</h2>
              <div className="editorial-columns">
                <div>
                  <h3>HISTORICAL NASA PHOTOGRAPHS</h3>
                  <p>
                    Archival mission photographs are credited directly in place with original NASA, NASA/JPL-Caltech, and 
                    partner catalog identifiers (including Apollo Hasselblad frames <code>AS12-48-7121</code> and <code>AS17-145-22162</code>, 
                    and Planetary Image Archive records like <code>PIA06739</code>). Contrast, grain, and authentic exposure 
                    are preserved to respect the historical photographic record.
                  </p>
                  <h3>ILLUSTRATIVE AI-GENERATED SCENES</h3>
                  <p>
                    Where historical photography was impossible—such as deep-space cruise phases, atmospheric entry trajectories, 
                    or descent engine firings—illustrative scenes provide educational context. Every illustrative scene is explicitly 
                    labeled on-screen: <em>“Illustrative AI scene. Not an actual site or NASA footage.”</em> They are never substituted 
                    for authentic scientific evidence.
                  </p>
                </div>
                <div>
                  <h3>IMAGINED SURVEYOR CUTAWAY</h3>
                  <p>
                    The optional Surveyor 3 cutaway animation illustrates an imagined interior. It is presented strictly 
                    as an educational artist’s visualization to help readers understand interior arrangement, rather than an official 
                    engineering CAD drawing or authentic hardware recording.
                  </p>
                  <h3>RECREATED INTERFACE WAVEFORMS & SIGNALS</h3>
                  <p>
                    All interface waveforms, carrier-lock visuals, telemetry traces, and signal status pulses are aesthetic, 
                    recreated interface elements. <strong>They are not actual NASA radio transmission data or recorded telemetry.</strong> 
                    This site does not play synthetic transmission audio, radio chatter, or dramatic trailers.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* 03 — RESEARCH METHODOLOGY */}
          <article id="sec-03" className="about-block">
            <div className="block-meta">
              <span className="block-num">03</span>
              <span className="block-tag">METHODOLOGY</span>
            </div>
            <div className="block-body">
              <h2>How to Read the Archive</h2>
              <div className="editorial-columns">
                <div>
                  <h3>DATE CONVENTIONS AND HISTORICAL CONTEXT</h3>
                  <p>
                    Spacecraft events occur across multiple reference frames. In this archive, dates retain their source context 
                    and state their timezones explicitly. For instance, Opportunity launched on <strong>July 8, 2003 UTC</strong>, which 
                    corresponded to <strong>July 7 in Pacific Daylight Time (PDT)</strong> at the mission control center in California; 
                    it landed on Mars on <strong>January 25, 2004 UTC</strong> (January 24 PST). Transparent timezone labeling eliminates false contradictions.
                  </p>
                  <h3>DOCUMENTED UNCERTAINTIES & CONFLICTING SOURCES</h3>
                  <p>
                    NASA's public Surveyor summary contains inconsistent Apollo 12 visit dates. This archive follows the primary 
                    historical mission account and official image captions: Apollo 12 touched down on <strong>November 19, 1969</strong>, 
                    and visited Surveyor 3 during the second moonwalk on <strong>November 20</strong>. Furthermore, the lander was not returned 
                    in full—only select components like its camera and scoop were recovered for terrestrial analysis.
                  </p>
                </div>
                <div>
                  <h3>VERIFYING HISTORICAL CLAIMS AND DOCUMENTED ENDINGS</h3>
                  <p>
                    Missions conclude in documented, distinct ways: planned impact, contact timeout, deliberate retirement, or battery exhaustion. 
                    The Apollo 17 Lunar Rover’s final liftoff-camera event is recorded as a documented final television event, not as a 
                    speculative claim about the rover’s exact final radio packet.
                  </p>
                  <p>
                    Where no original recording is included, no fictional recording, synthetic voice, or invented dialogue takes its place.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* 04 — ACCESSIBILITY */}
          <article id="sec-04" className="about-block">
            <div className="block-meta">
              <span className="block-num">04</span>
              <span className="block-tag">ACCESSIBILITY</span>
            </div>
            <div className="block-body">
              <h2>Accessible by Design</h2>
              <div className="editorial-columns">
                <div>
                  <h3>REDUCED-MOTION SUPPORT</h3>
                  <p>
                    Reduced-motion settings (<code>prefers-reduced-motion: reduce</code>) replace dynamic 3D sequences and the cutaway 
                    with two static stills, remove viewport drifting and reveal animations, and skip signal-acquisition wait timers so 
                    that content is accessible immediately.
                  </p>
                  <h3>KEYBOARD NAVIGATION</h3>
                  <p>
                    Comprehensive keyboard traversal throughout the site: skip-to-content links, tab-accessible menus and controls, 
                    Arrow-key tab navigation for timelines, and <code>Escape</code> key support for closing drawers and menus.
                  </p>
                </div>
                <div>
                  <h3>MANUAL READING CONTROLS</h3>
                  <p>
                    Readers control reading pace. Story scenes, event sequences, and archive timelines advance manually with dedicated 
                    previous/next controls and pause toggles, rather than forcing automated transitions.
                  </p>
                  <h3>NATIVE FILTERS & ACCESSIBLE ALTERNATIVES</h3>
                  <p>
                    Native accessible form elements, ARIA live regions for announcing filtered result counts, descriptive alternative 
                    text for all historical photography, and high-contrast typography meeting WCAG 2.1 AA standards.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* 05 — RESEARCH & REFERENCES */}
          <article id="sec-05" className="about-block sources-block">
            <div id="sources" className="anchor-mark" />
            <div id="references" className="anchor-mark" />

            <div className="block-meta">
              <span className="block-num">05</span>
              <span className="block-tag">PRIMARY EVIDENCE</span>
            </div>
            <div className="block-body">
              <h2>Research & References</h2>
              <p className="sources-intro">
                An expandable primary evidence library organized into mission-based groups. Each reference retains its original title, 
                official destination URL, and source attribution.
              </p>

              {/* Search Field & Controls */}
              <div className="ref-controls-panel">
                <div className="ref-search-field">
                  <span className="ref-icon" aria-hidden="true">⚲</span>
                  <input
                    type="search"
                    className="ref-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Find references by mission, title, agency, or keyword..."
                    aria-label="Filter references"
                  />
                  {searchQuery && (
                    <button
                      className="ref-clear"
                      onClick={() => setSearchQuery('')}
                      aria-label="Clear search"
                    >
                      CLEAR ✕
                    </button>
                  )}
                </div>

                <div className="ref-bar">
                  <span className="ref-total" aria-live="polite">
                    {totalRefCounts} {totalRefCounts === 1 ? 'REFERENCE' : 'REFERENCES'} · {filteredMissions.length} {filteredMissions.length === 1 ? 'MISSION' : 'MISSIONS'}
                    {searchQuery ? ' MATCHED' : ''}
                  </span>
                  <div className="ref-actions">
                    <button onClick={expandAll}>EXPAND ALL</button>
                    <span className="slash">/</span>
                    <button onClick={collapseAll}>COLLAPSE ALL</button>
                  </div>
                </div>
              </div>

              {filteredMissions.length === 0 ? (
                <div className="ref-none">
                  <p>No primary references found matching "{searchQuery}".</p>
                  <button className="outline" onClick={() => setSearchQuery('')}>RESET SEARCH</button>
                </div>
              ) : (
                <div className="ref-groups-list">
                  {/* 1. Lunar Missions */}
                  {groupedByCategory.lunar.length > 0 && (
                    <div className="ref-group-box">
                      <button
                        className="group-toggle-btn"
                        aria-expanded={expandedGroups['lunar']}
                        onClick={() => toggleGroup('lunar')}
                      >
                        <div className="group-label-wrap">
                          <span className="group-name">LUNAR MISSIONS</span>
                          <span className="group-count">
                            {groupedByCategory.lunar.reduce((a, m) => a + m.sources.length, 0)} SOURCES
                          </span>
                        </div>
                        <span className="group-caret">{expandedGroups['lunar'] ? '−' : '+'}</span>
                      </button>

                      {expandedGroups['lunar'] && (
                        <div className="group-missions">
                          {groupedByCategory.lunar.map(m => {
                            const open = isMissionOpen(m.id);
                            return (
                              <div key={m.id} className={`mission-row ${open ? 'open' : ''}`}>
                                <button
                                  className="mission-row-btn"
                                  aria-expanded={open}
                                  onClick={() => toggleMission(m.id)}
                                >
                                  <span className="m-title">{m.mission}</span>
                                  <span className="m-sources-pill">{m.sources.length} {m.sources.length === 1 ? 'SOURCE' : 'SOURCES'}</span>
                                  <span className="m-symbol">{open ? '−' : '+'}</span>
                                </button>

                                {open && (
                                  <ul className="m-links-list">
                                    {m.sources.map((s, idx) => (
                                      <li key={s.href + idx}>
                                        <a href={s.href} target="_blank" rel="noreferrer" className="m-link-item">
                                          <span className="link-text">{s.t} ↗</span>
                                          <span className="link-host">{getHostname(s.href)}</span>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}

                  {/* 2. Commercial Lunar Missions */}
                  {groupedByCategory.commercial.length > 0 && (
                    <div className="ref-group-box">
                      <button
                        className="group-toggle-btn"
                        aria-expanded={expandedGroups['commercial']}
                        onClick={() => toggleGroup('commercial')}
                      >
                        <div className="group-label-wrap">
                          <span className="group-name">COMMERCIAL LUNAR MISSIONS (CLPS)</span>
                          <span className="group-count">
                            {groupedByCategory.commercial.reduce((a, m) => a + m.sources.length, 0)} SOURCES
                          </span>
                        </div>
                        <span className="group-caret">{expandedGroups['commercial'] ? '−' : '+'}</span>
                      </button>

                      {expandedGroups['commercial'] && (
                        <div className="group-missions">
                          {groupedByCategory.commercial.map(m => {
                            const open = isMissionOpen(m.id);
                            return (
                              <div key={m.id} className={`mission-row ${open ? 'open' : ''}`}>
                                <button
                                  className="mission-row-btn"
                                  aria-expanded={open}
                                  onClick={() => toggleMission(m.id)}
                                >
                                  <span className="m-title">{m.mission}</span>
                                  <span className="m-sources-pill">{m.sources.length} {m.sources.length === 1 ? 'SOURCE' : 'SOURCES'}</span>
                                  <span className="m-symbol">{open ? '−' : '+'}</span>
                                </button>

                                {open && (
                                  <ul className="m-links-list">
                                    {m.sources.map((s, idx) => (
                                      <li key={s.href + idx}>
                                        <a href={s.href} target="_blank" rel="noreferrer" className="m-link-item">
                                          <span className="link-text">{s.t} ↗</span>
                                          <span className="link-host">{getHostname(s.href)}</span>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}

                  {/* 3. Mars Missions */}
                  {groupedByCategory.mars.length > 0 && (
                    <div className="ref-group-box">
                      <button
                        className="group-toggle-btn"
                        aria-expanded={expandedGroups['mars']}
                        onClick={() => toggleGroup('mars')}
                      >
                        <div className="group-label-wrap">
                          <span className="group-name">MARS MISSIONS</span>
                          <span className="group-count">
                            {groupedByCategory.mars.reduce((a, m) => a + m.sources.length, 0)} SOURCES
                          </span>
                        </div>
                        <span className="group-caret">{expandedGroups['mars'] ? '−' : '+'}</span>
                      </button>

                      {expandedGroups['mars'] && (
                        <div className="group-missions">
                          {groupedByCategory.mars.map(m => {
                            const open = isMissionOpen(m.id);
                            return (
                              <div key={m.id} className={`mission-row ${open ? 'open' : ''}`}>
                                <button
                                  className="mission-row-btn"
                                  aria-expanded={open}
                                  onClick={() => toggleMission(m.id)}
                                >
                                  <span className="m-title">{m.mission}</span>
                                  <span className="m-sources-pill">{m.sources.length} {m.sources.length === 1 ? 'SOURCE' : 'SOURCES'}</span>
                                  <span className="m-symbol">{open ? '−' : '+'}</span>
                                </button>

                                {open && (
                                  <ul className="m-links-list">
                                    {m.sources.map((s, idx) => (
                                      <li key={s.href + idx}>
                                        <a href={s.href} target="_blank" rel="noreferrer" className="m-link-item">
                                          <span className="link-text">{s.t} ↗</span>
                                          <span className="link-host">{getHostname(s.href)}</span>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}

                  {/* 4. Deep Space Missions */}
                  {groupedByCategory['deep-space'].length > 0 && (
                    <div className="ref-group-box">
                      <button
                        className="group-toggle-btn"
                        aria-expanded={expandedGroups['deep-space']}
                        onClick={() => toggleGroup('deep-space')}
                      >
                        <div className="group-label-wrap">
                          <span className="group-name">DEEP SPACE MISSIONS</span>
                          <span className="group-count">
                            {groupedByCategory['deep-space'].reduce((a, m) => a + m.sources.length, 0)} SOURCES
                          </span>
                        </div>
                        <span className="group-caret">{expandedGroups['deep-space'] ? '−' : '+'}</span>
                      </button>

                      {expandedGroups['deep-space'] && (
                        <div className="group-missions">
                          {groupedByCategory['deep-space'].map(m => {
                            const open = isMissionOpen(m.id);
                            return (
                              <div key={m.id} className={`mission-row ${open ? 'open' : ''}`}>
                                <button
                                  className="mission-row-btn"
                                  aria-expanded={open}
                                  onClick={() => toggleMission(m.id)}
                                >
                                  <span className="m-title">{m.mission}</span>
                                  <span className="m-sources-pill">{m.sources.length} {m.sources.length === 1 ? 'SOURCE' : 'SOURCES'}</span>
                                  <span className="m-symbol">{open ? '−' : '+'}</span>
                                </button>

                                {open && (
                                  <ul className="m-links-list">
                                    {m.sources.map((s, idx) => (
                                      <li key={s.href + idx}>
                                        <a href={s.href} target="_blank" rel="noreferrer" className="m-link-item">
                                          <span className="link-text">{s.t} ↗</span>
                                          <span className="link-host">{getHostname(s.href)}</span>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </article>

          {/* 06 — IMAGE CREDITS & DISCLAIMERS */}
          <article id="sec-06" className="about-block">
            <div className="block-meta">
              <span className="block-num">06</span>
              <span className="block-tag">LEGAL & CREDITS</span>
            </div>
            <div className="block-body">
              <h2>Image Credits & Disclaimers</h2>
              
              <h3>HISTORICAL IMAGE CREDITS</h3>
              <p className="credit-list">
                Surveyor 3: NASA, AS12-48-7121 and AS12-48-7133. Apollo 17: NASA, AS17-137-20979 and AS17-145-22162. 
                Opportunity: NASA/JPL-Caltech, PIA06739 and PIA17759. Lunar Reconnaissance Orbiter: NASA/GSFC/Arizona State University (LROC). 
                Mars Reconnaissance Orbiter / Curiosity / Perseverance: NASA/JPL-Caltech/MSSS. Existing illustrative scenes are labeled and are not NASA photographs.
              </p>

              <h3>NASA IMAGE & MEDIA GUIDELINES</h3>
              <p>
                <a href="https://www.nasa.gov/nasa-brand-center/images-and-media/" target="_blank" rel="noreferrer" className="text-link">
                  NASA image and media guidelines ↗
                </a>
              </p>

              <h3>RESEARCH CUT-OFF DATE</h3>
              <p className="muted">
                Research checked November 11, 2026. Active mission status re-checked November 12, 2026.
              </p>

              <div className="disclaimer-note">
                <p>
                  <strong>Independent Educational Project:</strong> THE LAST SIGNAL is an independent educational storytelling 
                  and preservation project. It is not an official NASA product, has not been produced under NASA auspices, 
                  and is not endorsed by NASA or the United States Government.
                </p>
              </div>
            </div>
          </article>
        </section>
      )}
    </Frame>
  );
}
