import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Frame } from './Site';
import { records, type RecordInfo } from './archive';
import { activeRecords } from './films';
import { storyCatalog, modelIds } from './films';
import './about.css';

// Mission categorization for primary evidence library (Section 05)
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
  const [activeSection, setActiveSection] = useState('project');

  // Compile all mission sources from archive records and active records
  const allMissionGroups: MissionSourceGroup[] = useMemo(() => {
    const list: MissionSourceGroup[] = [];
    const recordMap = new Map<string, RecordInfo>(records.map(r => [r.id, r]));

    // Helper to resolve sources
    const addMission = (id: string, cat: 'lunar' | 'commercial' | 'mars' | 'deep-space', catLabel: string) => {
      const rec = recordMap.get(id);
      const active = activeRecords.find(a => a.id === id);
      
      let missionName = rec ? rec.mission : (active ? active.mission : id);
      let sources: { t: string; href: string }[] = [];

      if (rec && rec.sources && rec.sources.length > 0) {
        sources = [...rec.sources];
      } else if (active && active.source) {
        sources = [{ t: `${active.mission} — Official NASA Mission Archive`, href: active.source }];
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
    setActiveSection(id);
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
        <article className="about-editorial-wrap">
          {/* Sub-Navigation Bar */}
          <nav className="about-subnav" aria-label="About page section directory">
            <div className="about-subnav-inner">
              <span className="subnav-label">INDEX /</span>
              <button 
                className={`subnav-btn ${activeSection === 'section-01' ? 'active' : ''}`}
                onClick={() => scrollTo('section-01')}
              >
                01 THE PROJECT
              </button>
              <button 
                className={`subnav-btn ${activeSection === 'section-02' ? 'active' : ''}`}
                onClick={() => scrollTo('section-02')}
              >
                02 IMAGERY & MOTION
              </button>
              <button 
                className={`subnav-btn ${activeSection === 'section-03' ? 'active' : ''}`}
                onClick={() => scrollTo('section-03')}
              >
                03 METHODOLOGY
              </button>
              <button 
                className={`subnav-btn ${activeSection === 'section-04' ? 'active' : ''}`}
                onClick={() => scrollTo('section-04')}
              >
                04 ACCESSIBILITY
              </button>
              <button 
                className={`subnav-btn ${activeSection === 'section-05' ? 'active' : ''}`}
                onClick={() => scrollTo('section-05')}
              >
                05 REFERENCES
              </button>
              <button 
                className={`subnav-btn ${activeSection === 'section-06' ? 'active' : ''}`}
                onClick={() => scrollTo('section-06')}
              >
                06 CREDITS
              </button>
            </div>
          </nav>

          <header className="about-hero">
            <p className="eyebrow" data-reveal>THE LAST SIGNAL / EDITORIAL COMPENDIUM</p>
            <h1 data-reveal>HISTORY,<br />NOT MYTHOLOGY.</h1>
            <p className="lede" data-reveal>
              An independent interactive archive and educational storytelling project dedicated to 
              NASA's distant explorers across the Moon, Mars, and deep space.
            </p>
            <div className="hero-divider" />
          </header>

          {/* SECTION 01 — THE PROJECT */}
          <section id="section-01" className="about-section">
            <div className="section-meta">
              <span className="section-number">01</span>
              <span className="section-tag">PROJECT FOUNDATION</span>
            </div>
            <div className="section-content">
              <div className="title-block">
                <h2>THE PROJECT</h2>
                <p className="subtitle">Every machine had a mission. Every mission left a story.</p>
              </div>

              <div className="editorial-prose">
                <p>
                  <strong>THE LAST SIGNAL</strong> is an educational storytelling archive created to document 
                  humanity’s interplanetary explorers with rigorous scientific and historical fidelity. Space exploration 
                  is frequently retold through romanticized folklore or oversimplified headlines. This archive exists to return 
                  to primary sources: the raw telemetry logs, engineering challenges, planetary photography, and verified scientific 
                  findings that define each spacecraft’s historical journey.
                </p>
                <p>
                  Silence across millions of miles is not an absence of meaning. Whether resting in a lunar crater, weathering Martian 
                  dust storms, or continuing past the heliopause into interstellar space, each robotic and crewed explorer left an indelible 
                  legacy that shaped how humanity understands other worlds.
                </p>
              </div>

              <div className="stats-metric-strip">
                <div className="metric-box">
                  <span className="metric-val">{storyCatalog.length}</span>
                  <span className="metric-label">MISSION STORIES</span>
                  <span className="metric-desc">8–12 illustrated scenes each, linked directly to NASA documentation.</span>
                </div>
                <div className="metric-box">
                  <span className="metric-val">{records.length}</span>
                  <span className="metric-label">ARCHIVE RECORDS</span>
                  <span className="metric-desc">Documented hardware dossiers, timelines, specifications, and legacies.</span>
                </div>
                <div className="metric-box">
                  <span className="metric-val">{activeRecords.length}</span>
                  <span className="metric-label">ACTIVE EXPLORERS</span>
                  <span className="metric-desc">Still Exploring collection: ongoing missions with verified dated status.</span>
                </div>
                <div className="metric-box">
                  <span className="metric-val">{modelIds.length}</span>
                  <span className="metric-label">3D HARDWARE STUDIES</span>
                  <span className="metric-desc">Interactive Three.js exterior models preserving part callouts and scale.</span>
                </div>
              </div>

              <div className="editorial-callout">
                <p>
                  <strong>More Than Machines:</strong> Active explorers belong in <em>Still Exploring</em>, strictly separate from concluded missions. 
                  Their stories have no invented endings. Filters that return empty results are displayed honestly rather than padded with unverified speculation.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 02 — IMAGERY & MOTION */}
          <section id="section-02" className="about-section">
            <div className="section-meta">
              <span className="section-number">02</span>
              <span className="section-tag">VISUAL INTEGRITY</span>
            </div>
            <div className="section-content">
              <div className="title-block">
                <h2>IMAGERY & MOTION</h2>
                <p className="subtitle">Clear distinctions between primary scientific evidence and educational art.</p>
              </div>

              <div className="grid-two-col">
                <div className="archival-card">
                  <span className="card-badge">PRIMARY RECORDS</span>
                  <h3>Historical NASA Photographs</h3>
                  <p>
                    Archival mission photographs are preserved and credited beside each scene with their original catalog identifiers 
                    (e.g., NASA Hasselblad frames <code>AS12-48-7121</code> and <code>AS17-145-22162</code>, or JPL Planetary Image 
                    Archive records like <code>PIA06739</code>). Authentic lighting, exposure anomalies, and photographic grain are 
                    preserved as documented historical evidence.
                  </p>
                </div>

                <div className="archival-card">
                  <span className="card-badge">EDUCATIONAL ART</span>
                  <h3>Illustrative AI-Generated Scenes</h3>
                  <p>
                    Where historical photography was impossible—such as deep-space cruise phases, atmospheric entry trajectories, 
                    or descent engine burns—illustrative scenes provide educational context. Every illustrative scene is explicitly 
                    labeled: <em>“Illustrative AI scene. Not an actual site or NASA footage.”</em> They are never substituted for authentic evidence.
                  </p>
                </div>

                <div className="archival-card">
                  <span className="card-badge">CONCEPTUAL MODEL</span>
                  <h3>Imagined Surveyor Cutaway</h3>
                  <p>
                    The optional Surveyor 3 cutaway animation illustrates an imagined mechanical interior. It is presented strictly 
                    as an educational artist's conceptual study to visualize interior sub-systems, rather than an official engineering 
                    CAD model or authentic telemetry recording.
                  </p>
                </div>

                <div className="archival-card">
                  <span className="card-badge">INTERFACE DESIGN</span>
                  <h3>Recreated Waveforms & Signals</h3>
                  <p>
                    All interface waveforms, carrier-lock animations, telemetry traces, and signal status pulses are aesthetic, 
                    recreated interface elements. <strong>They are not actual NASA radio transmission data or recorded telemetry.</strong> 
                    This site does not play synthetic radio static, fabricated astronaut speech, or dramatic background trailers.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 03 — RESEARCH METHODOLOGY */}
          <section id="section-03" className="about-section">
            <div className="section-meta">
              <span className="section-number">03</span>
              <span className="section-tag">HISTORICAL METHOD</span>
            </div>
            <div className="section-content">
              <div className="title-block">
                <h2>RESEARCH METHODOLOGY</h2>
                <p className="subtitle">How facts are documented, reconciled, and held accountable.</p>
              </div>

              <div className="methodology-flow">
                <div className="method-step">
                  <div className="step-marker">01</div>
                  <div className="step-body">
                    <h3>Date Conventions & Timezone Precision</h3>
                    <p>
                      Spacecraft events occur across multiple reference frames. In this archive, dates retain their source context 
                      and state their timezones explicitly. For instance, Opportunity launched on <strong>July 8, 2003 UTC</strong>, which 
                      corresponded to <strong>July 7 in Pacific Daylight Time (PDT)</strong> at the mission control center in California; 
                      it landed on Mars on <strong>January 25, 2004 UTC</strong> (January 24 PST). Transparent timezone labeling eliminates false contradictions.
                    </p>
                  </div>
                </div>

                <div className="method-step">
                  <div className="step-marker">02</div>
                  <div className="step-body">
                    <h3>Documented Uncertainties & Conflicting Sources</h3>
                    <p>
                      Official summaries occasionally contain conflicting historical data. NASA’s public Surveyor 3 summary contains 
                      inconsistent dates for Apollo 12’s visit. THE LAST SIGNAL resolves this by adhering to the primary mission flight 
                      journal and photographic timestamps: Apollo 12 touched down on <strong>November 19, 1969</strong>, and visited Surveyor 
                      during the second moonwalk on <strong>November 20</strong>. Furthermore, the lander was not returned in full—only 
                      its television camera, scoop, and selected tubing were recovered for analysis.
                    </p>
                  </div>
                </div>

                <div className="method-step">
                  <div className="step-marker">03</div>
                  <div className="step-body">
                    <h3>Documented Endings vs. Mythological Narratives</h3>
                    <p>
                      Missions conclude in distinct, documented ways: deliberate command terminations, communication cutoffs, battery 
                      depletions, or intentional kinetic impacts. The Apollo 17 Lunar Roving Vehicle's television camera transmission 
                      showing the lunar module ascent stage lifting off is presented as a documented final visual milestone, not as a 
                      speculative “last packet.” Where no final transmission was recorded, no synthetic dramatization takes its place.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 04 — ACCESSIBILITY */}
          <section id="section-04" className="about-section">
            <div className="section-meta">
              <span className="section-number">04</span>
              <span className="section-tag">INCLUSION</span>
            </div>
            <div className="section-content">
              <div className="title-block">
                <h2>ACCESSIBILITY</h2>
                <p className="subtitle">Built to ensure archival discovery is open to every reader and device.</p>
              </div>

              <div className="grid-four-col">
                <div className="access-pillar">
                  <span className="access-icon">◌</span>
                  <h3>Reduced Motion</h3>
                  <p>
                    Full <code>prefers-reduced-motion</code> compliance. Replaces 3D drift and scroll-linked scaling with static stills, 
                    disables viewport parallax, and bypasses signal-acquisition wait timers.
                  </p>
                </div>

                <div className="access-pillar">
                  <span className="access-icon">⊞</span>
                  <h3>Keyboard Control</h3>
                  <p>
                    Full keyboard navigability. Includes top-level skip links, accessible focus rings, Arrow-key tab navigation, 
                    and <code>Escape</code> key support for closing drawers and menus.
                  </p>
                </div>

                <div className="access-pillar">
                  <span className="access-icon">☷</span>
                  <h3>Manual Reading</h3>
                  <p>
                    Readers control reading velocity. Every story scene, event sequence, and archive record can be advanced 
                    manually with dedicated next/previous controls and pause toggles.
                  </p>
                </div>

                <div className="access-pillar">
                  <span className="access-icon">◇</span>
                  <h3>Semantic Standards</h3>
                  <p>
                    WCAG 2.1 AA compliant color contrast, native form elements, descriptive alternative text on archival photos, 
                    and ARIA live regions for filter count updates.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 05 — RESEARCH & REFERENCES */}
          <section id="section-05" className="about-section sources-section">
            <div id="sources" className="anchor-target" />
            <div id="references" className="anchor-target" />
            
            <div className="section-meta">
              <span className="section-number">05</span>
              <span className="section-tag">PRIMARY SOURCES</span>
            </div>
            <div className="section-content">
              <div className="title-block">
                <h2>RESEARCH & REFERENCES</h2>
                <p className="subtitle">
                  An expandable primary evidence library organized by destination, mission, and source.
                </p>
              </div>

              {/* Search & Filter Controls */}
              <div className="reference-controls">
                <div className="ref-search-wrap">
                  <span className="ref-search-icon" aria-hidden="true">⚲</span>
                  <input
                    type="search"
                    className="ref-search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search references by mission, agency, title, or keyword..."
                    aria-label="Filter references"
                  />
                  {searchQuery && (
                    <button 
                      className="ref-clear-btn"
                      onClick={() => setSearchQuery('')}
                      aria-label="Clear search query"
                    >
                      CLEAR ✕
                    </button>
                  )}
                </div>

                <div className="ref-toolbar">
                  <span className="ref-count-badge" aria-live="polite">
                    {totalRefCounts} {totalRefCounts === 1 ? 'REFERENCE' : 'REFERENCES'} · {filteredMissions.length} {filteredMissions.length === 1 ? 'MISSION' : 'MISSIONS'}
                    {searchQuery && ' MATCHED'}
                  </span>
                  <div className="ref-toggles">
                    <button className="ref-toggle-btn" onClick={expandAll}>EXPAND ALL</button>
                    <span className="divider">/</span>
                    <button className="ref-toggle-btn" onClick={collapseAll}>COLLAPSE ALL</button>
                  </div>
                </div>
              </div>

              {filteredMissions.length === 0 ? (
                <div className="ref-empty-state">
                  <h3>No references match your query</h3>
                  <p>Try searching for a different spacecraft, planet, or research keyword.</p>
                  <button className="outline" onClick={() => setSearchQuery('')}>RESET SEARCH</button>
                </div>
              ) : (
                <div className="ref-category-stack">
                  {/* Category 1: Lunar Missions */}
                  {groupedByCategory.lunar.length > 0 && (
                    <div className="ref-category-card">
                      <button 
                        className="category-header-btn" 
                        aria-expanded={expandedGroups['lunar']}
                        onClick={() => toggleGroup('lunar')}
                      >
                        <div className="cat-title-wrap">
                          <span className="cat-index">01</span>
                          <span className="cat-name">LUNAR MISSIONS</span>
                          <span className="cat-badge">
                            {groupedByCategory.lunar.reduce((a, m) => a + m.sources.length, 0)} REFERENCES
                          </span>
                        </div>
                        <span className="accordion-caret">{expandedGroups['lunar'] ? '−' : '+'}</span>
                      </button>

                      {expandedGroups['lunar'] && (
                        <div className="mission-list">
                          {groupedByCategory.lunar.map(m => (
                            <div key={m.id} className="mission-ref-item">
                              <button 
                                className="mission-header-btn"
                                aria-expanded={expandedMissions[m.id] !== false}
                                onClick={() => toggleMission(m.id)}
                              >
                                <span className="m-name">{m.mission}</span>
                                <span className="m-count">{m.sources.length} {m.sources.length === 1 ? 'SOURCE' : 'SOURCES'}</span>
                                <span className="m-caret">{expandedMissions[m.id] === false ? '+' : '−'}</span>
                              </button>
                              
                              {expandedMissions[m.id] !== false && (
                                <ul className="source-links">
                                  {m.sources.map((s, idx) => (
                                    <li key={s.href + idx} className="source-link-row">
                                      <a href={s.href} target="_blank" rel="noreferrer" className="source-anchor">
                                        <span className="src-title">{s.t}</span>
                                        <span className="src-host">{getHostname(s.href)} ↗</span>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Category 2: Commercial Lunar Missions */}
                  {groupedByCategory.commercial.length > 0 && (
                    <div className="ref-category-card">
                      <button 
                        className="category-header-btn" 
                        aria-expanded={expandedGroups['commercial']}
                        onClick={() => toggleGroup('commercial')}
                      >
                        <div className="cat-title-wrap">
                          <span className="cat-index">02</span>
                          <span className="cat-name">COMMERCIAL LUNAR MISSIONS (CLPS)</span>
                          <span className="cat-badge">
                            {groupedByCategory.commercial.reduce((a, m) => a + m.sources.length, 0)} REFERENCES
                          </span>
                        </div>
                        <span className="accordion-caret">{expandedGroups['commercial'] ? '−' : '+'}</span>
                      </button>

                      {expandedGroups['commercial'] && (
                        <div className="mission-list">
                          {groupedByCategory.commercial.map(m => (
                            <div key={m.id} className="mission-ref-item">
                              <button 
                                className="mission-header-btn"
                                aria-expanded={expandedMissions[m.id] !== false}
                                onClick={() => toggleMission(m.id)}
                              >
                                <span className="m-name">{m.mission}</span>
                                <span className="m-count">{m.sources.length} {m.sources.length === 1 ? 'SOURCE' : 'SOURCES'}</span>
                                <span className="m-caret">{expandedMissions[m.id] === false ? '+' : '−'}</span>
                              </button>
                              
                              {expandedMissions[m.id] !== false && (
                                <ul className="source-links">
                                  {m.sources.map((s, idx) => (
                                    <li key={s.href + idx} className="source-link-row">
                                      <a href={s.href} target="_blank" rel="noreferrer" className="source-anchor">
                                        <span className="src-title">{s.t}</span>
                                        <span className="src-host">{getHostname(s.href)} ↗</span>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Category 3: Mars Missions */}
                  {groupedByCategory.mars.length > 0 && (
                    <div className="ref-category-card">
                      <button 
                        className="category-header-btn" 
                        aria-expanded={expandedGroups['mars']}
                        onClick={() => toggleGroup('mars')}
                      >
                        <div className="cat-title-wrap">
                          <span className="cat-index">03</span>
                          <span className="cat-name">MARS MISSIONS</span>
                          <span className="cat-badge">
                            {groupedByCategory.mars.reduce((a, m) => a + m.sources.length, 0)} REFERENCES
                          </span>
                        </div>
                        <span className="accordion-caret">{expandedGroups['mars'] ? '−' : '+'}</span>
                      </button>

                      {expandedGroups['mars'] && (
                        <div className="mission-list">
                          {groupedByCategory.mars.map(m => (
                            <div key={m.id} className="mission-ref-item">
                              <button 
                                className="mission-header-btn"
                                aria-expanded={expandedMissions[m.id] !== false}
                                onClick={() => toggleMission(m.id)}
                              >
                                <span className="m-name">{m.mission}</span>
                                <span className="m-count">{m.sources.length} {m.sources.length === 1 ? 'SOURCE' : 'SOURCES'}</span>
                                <span className="m-caret">{expandedMissions[m.id] === false ? '+' : '−'}</span>
                              </button>
                              
                              {expandedMissions[m.id] !== false && (
                                <ul className="source-links">
                                  {m.sources.map((s, idx) => (
                                    <li key={s.href + idx} className="source-link-row">
                                      <a href={s.href} target="_blank" rel="noreferrer" className="source-anchor">
                                        <span className="src-title">{s.t}</span>
                                        <span className="src-host">{getHostname(s.href)} ↗</span>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Category 4: Deep Space Missions */}
                  {groupedByCategory['deep-space'].length > 0 && (
                    <div className="ref-category-card">
                      <button 
                        className="category-header-btn" 
                        aria-expanded={expandedGroups['deep-space']}
                        onClick={() => toggleGroup('deep-space')}
                      >
                        <div className="cat-title-wrap">
                          <span className="cat-index">04</span>
                          <span className="cat-name">DEEP SPACE MISSIONS</span>
                          <span className="cat-badge">
                            {groupedByCategory['deep-space'].reduce((a, m) => a + m.sources.length, 0)} REFERENCES
                          </span>
                        </div>
                        <span className="accordion-caret">{expandedGroups['deep-space'] ? '−' : '+'}</span>
                      </button>

                      {expandedGroups['deep-space'] && (
                        <div className="mission-list">
                          {groupedByCategory['deep-space'].map(m => (
                            <div key={m.id} className="mission-ref-item">
                              <button 
                                className="mission-header-btn"
                                aria-expanded={expandedMissions[m.id] !== false}
                                onClick={() => toggleMission(m.id)}
                              >
                                <span className="m-name">{m.mission}</span>
                                <span className="m-count">{m.sources.length} {m.sources.length === 1 ? 'SOURCE' : 'SOURCES'}</span>
                                <span className="m-caret">{expandedMissions[m.id] === false ? '+' : '−'}</span>
                              </button>
                              
                              {expandedMissions[m.id] !== false && (
                                <ul className="source-links">
                                  {m.sources.map((s, idx) => (
                                    <li key={s.href + idx} className="source-link-row">
                                      <a href={s.href} target="_blank" rel="noreferrer" className="source-anchor">
                                        <span className="src-title">{s.t}</span>
                                        <span className="src-host">{getHostname(s.href)} ↗</span>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>

          {/* SECTION 06 — IMAGE CREDITS & DISCLAIMERS */}
          <section id="section-06" className="about-section">
            <div className="section-meta">
              <span className="section-number">06</span>
              <span className="section-tag">LEGAL & CREDITS</span>
            </div>
            <div className="section-content">
              <div className="title-block">
                <h2>IMAGE CREDITS & DISCLAIMERS</h2>
                <p className="subtitle">Attributions, intellectual property, and educational terms.</p>
              </div>

              <div className="credits-grid">
                <div className="credit-block">
                  <h3>Historical Image Provenance</h3>
                  <p className="credit-p">
                    Photographs and instrument scans are credited beside each appearance. Significant source records include:
                  </p>
                  <ul className="credit-bullets">
                    <li><strong>Surveyor 3:</strong> NASA, AS12-48-7121 and AS12-48-7133.</li>
                    <li><strong>Apollo 17:</strong> NASA, AS17-137-20979 and AS17-145-22162.</li>
                    <li><strong>Opportunity:</strong> NASA/JPL-Caltech, PIA06739 and PIA17759.</li>
                    <li><strong>Lunar Reconnaissance Orbiter:</strong> NASA/GSFC/Arizona State University (LROC).</li>
                    <li><strong>Mars Reconnaissance Orbiter / Curiosity / Perseverance:</strong> NASA/JPL-Caltech/MSSS.</li>
                  </ul>
                  <p className="credit-note">Existing illustrative reconstructions are labeled and are not authentic NASA photographs.</p>
                </div>

                <div className="credit-block">
                  <h3>Open Font Licensing</h3>
                  <p className="credit-p">
                    Typography across THE LAST SIGNAL is rendered using self-hosted open fonts:
                  </p>
                  <ul className="credit-bullets">
                    <li><strong>Cormorant Garamond:</strong> Designed by Christian Thalmann (SIL Open Font License).</li>
                    <li><strong>Inter:</strong> Designed by Rasmus Andersson (SIL Open Font License).</li>
                    <li><strong>IBM Plex Mono:</strong> Designed by Mike Abbink and Bold Monday (SIL Open Font License).</li>
                  </ul>
                  <p className="credit-note">Full font license texts are included in the source code distribution.</p>
                </div>
              </div>

              <div className="disclaimer-callout">
                <div className="disclaimer-header">
                  <span className="disclaimer-badge">OFFICIAL NOTICE</span>
                  <a 
                    href="https://www.nasa.gov/nasa-brand-center/images-and-media/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="disclaimer-link"
                  >
                    NASA Image and Media Guidelines ↗
                  </a>
                </div>
                <p>
                  THE LAST SIGNAL is an independent educational storytelling and preservation project. It is not an 
                  official NASA product, has not been produced under NASA contract, and is not endorsed by the National 
                  Aeronautics and Space Administration (NASA), the Jet Propulsion Laboratory (JPL), or any commercial aerospace vendor.
                </p>
                <div className="disclaimer-footer">
                  <span>RESEARCH VERIFIED: 11 NOVEMBER 2026</span>
                  <span>ACTIVE RE-CHECK: 12 NOVEMBER 2026</span>
                  <span>DOCUMENTED HISTORY · OPEN TRANSPARENCY</span>
                </div>
              </div>

              <div className="about-footer-nav">
                <Link to="/machines" className="cta">
                  EXPLORE THE MISSION DIRECTORY <span>⟶</span>
                </Link>
                <Link to="/stories" className="outline">
                  READ THE PICTURE-BOOK STORIES ↗
                </Link>
                <Link to="/equipment" className="outline">
                  INSPECT 3D EQUIPMENT ↗
                </Link>
              </div>
            </div>
          </section>
        </article>
      )}
    </Frame>
  );
}
