import React, { useState, useMemo } from 'react';
import { Frame } from './Site';
import { records, type RecordInfo } from './archive';
import { activeRecords, storyCatalog, modelIds } from './films';
import './about.css';

// 4 Mission categories for Primary Evidence Library
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
        <section className="wrap page-section about">
          <p className="eyebrow">06 / ABOUT THE PROJECT</p>
          <h1>HISTORY,<br />NOT MYTHOLOGY.</h1>
          <p className="lede">
            An independent interactive archive of machines whose work changed how we see other worlds.
          </p>

          <div className="about-grid">
            <section>
              <h2>MORE THAN MACHINES</h2>
              <p>
                THE LAST SIGNAL is growing into a collection of individual machine stories. The current edition tells{' '}
                {storyCatalog.length} stories: {storyCatalog.map(c => c.name).join(', ')}. Each has eight scenes and
                source-linked evidence. Active missions are in Still Exploring, separate from the archive of finished work.
              </p>
              <p>
                This batch has {records.length} archive records across the Moon, Mars and deep space, and{' '}
                {modelIds.length} inspectable 3D models. {activeRecords.length} active-mission records are in Still
                Exploring. The wider collection is still being researched. Empty filters are shown honestly, rather than
                filled with unverified content.
              </p>

              <h2>IMAGERY AND MOTION</h2>
              <p>
                Historical photographs are credited in place. Existing AI scenes and the Surveyor cutaway are labeled
                illustrative. The cutaway interior is imagined, not a reference for real hardware.
              </p>
              <p>
                All interface waveforms, acquisition effects and signal animations are recreated visuals. They are not
                actual NASA transmission data. This site does not play transmission audio or offer a trailer.
              </p>
            </section>

            <section>
              <h2>HOW TO READ THE ARCHIVE</h2>
              <p>
                Dates retain their source context. Opportunity launched July 8, 2003 UTC, or July 7 in Pacific Daylight
                Time; it landed January 25, 2004 UTC, or January 24 in Pacific Standard Time.
              </p>
              <p>
                NASA's Surveyor summary contains inconsistent Apollo 12 visit dates. This archive follows the historical
                account and image caption: Apollo 12 landed November 19, 1969, and visited Surveyor on the second
                moonwalk on November 20. The original lander was not brought back as a whole.
              </p>
              <p>
                The Apollo rover's final liftoff-camera event is not presented as its exact final radio packet. Where no
                original recording is included, no fictional recording takes its place.
              </p>

              <h2>ACCESSIBLE BY DESIGN</h2>
              <p>
                Reduced-motion settings replace the cutaway with two stills, remove drifting and reveal animations, and
                skip signal-acquisition waiting. Signal stories can be read manually. Keyboard controls and native
                filters remain available.
              </p>
            </section>
          </div>

          {/* UPGRADED PRIMARY EVIDENCE LIBRARY (Section 05) */}
          <div id="sources" className="sources-block">
            <div id="references" />
            <div className="sources-header">
              <h3>Research and references</h3>
              <p className="sources-lede">
                Primary NASA evidence organized by destination and mission. Search or expand any mission to inspect original source records.
              </p>
            </div>

            {/* Search and Expand Controls */}
            <div className="reference-controls">
              <div className="ref-search-wrap">
                <span className="ref-search-icon" aria-hidden="true">⚲</span>
                <input
                  type="search"
                  className="ref-search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search references by mission, title, agency, or keyword..."
                  aria-label="Filter references"
                />
                {searchQuery && (
                  <button
                    className="ref-clear-btn"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                  >
                    CLEAR ✕
                  </button>
                )}
              </div>

              <div className="ref-toolbar">
                <span className="ref-count-badge" aria-live="polite">
                  {totalRefCounts} {totalRefCounts === 1 ? 'REFERENCE' : 'REFERENCES'} · {filteredMissions.length} {filteredMissions.length === 1 ? 'MISSION' : 'MISSIONS'}
                  {searchQuery ? ' MATCHED' : ''}
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
                <p>No references match "{searchQuery}".</p>
                <button className="outline" onClick={() => setSearchQuery('')}>RESET SEARCH</button>
              </div>
            ) : (
              <div className="ref-category-stack">
                {/* 1. Lunar Missions */}
                {groupedByCategory.lunar.length > 0 && (
                  <div className="ref-category-card">
                    <button
                      className="category-header-btn"
                      aria-expanded={expandedGroups['lunar']}
                      onClick={() => toggleGroup('lunar')}
                    >
                      <div className="cat-title-wrap">
                        <span className="cat-name">LUNAR MISSIONS</span>
                        <span className="cat-badge">
                          {groupedByCategory.lunar.reduce((a, m) => a + m.sources.length, 0)} SOURCES
                        </span>
                      </div>
                      <span className="accordion-caret">{expandedGroups['lunar'] ? '−' : '+'}</span>
                    </button>

                    {expandedGroups['lunar'] && (
                      <div className="mission-list">
                        {groupedByCategory.lunar.map(m => {
                          const open = isMissionOpen(m.id);
                          return (
                            <div key={m.id} className={`mission-ref-item ${open ? 'is-open' : ''}`}>
                              <button
                                className="mission-header-btn"
                                aria-expanded={open}
                                onClick={() => toggleMission(m.id)}
                              >
                                <span className="m-name">{m.mission}</span>
                                <span className="m-count">{m.sources.length} {m.sources.length === 1 ? 'SOURCE' : 'SOURCES'}</span>
                                <span className="m-caret">{open ? '−' : '+'}</span>
                              </button>

                              {open && (
                                <ul className="source-links">
                                  {m.sources.map((s, idx) => (
                                    <li key={s.href + idx} className="source-link-row">
                                      <a href={s.href} target="_blank" rel="noreferrer" className="source-anchor">
                                        <span className="src-title">{s.t} ↗</span>
                                        <span className="src-host">{getHostname(s.href)}</span>
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
                  <div className="ref-category-card">
                    <button
                      className="category-header-btn"
                      aria-expanded={expandedGroups['commercial']}
                      onClick={() => toggleGroup('commercial')}
                    >
                      <div className="cat-title-wrap">
                        <span className="cat-name">COMMERCIAL LUNAR MISSIONS (CLPS)</span>
                        <span className="cat-badge">
                          {groupedByCategory.commercial.reduce((a, m) => a + m.sources.length, 0)} SOURCES
                        </span>
                      </div>
                      <span className="accordion-caret">{expandedGroups['commercial'] ? '−' : '+'}</span>
                    </button>

                    {expandedGroups['commercial'] && (
                      <div className="mission-list">
                        {groupedByCategory.commercial.map(m => {
                          const open = isMissionOpen(m.id);
                          return (
                            <div key={m.id} className={`mission-ref-item ${open ? 'is-open' : ''}`}>
                              <button
                                className="mission-header-btn"
                                aria-expanded={open}
                                onClick={() => toggleMission(m.id)}
                              >
                                <span className="m-name">{m.mission}</span>
                                <span className="m-count">{m.sources.length} {m.sources.length === 1 ? 'SOURCE' : 'SOURCES'}</span>
                                <span className="m-caret">{open ? '−' : '+'}</span>
                              </button>

                              {open && (
                                <ul className="source-links">
                                  {m.sources.map((s, idx) => (
                                    <li key={s.href + idx} className="source-link-row">
                                      <a href={s.href} target="_blank" rel="noreferrer" className="source-anchor">
                                        <span className="src-title">{s.t} ↗</span>
                                        <span className="src-host">{getHostname(s.href)}</span>
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
                  <div className="ref-category-card">
                    <button
                      className="category-header-btn"
                      aria-expanded={expandedGroups['mars']}
                      onClick={() => toggleGroup('mars')}
                    >
                      <div className="cat-title-wrap">
                        <span className="cat-name">MARS MISSIONS</span>
                        <span className="cat-badge">
                          {groupedByCategory.mars.reduce((a, m) => a + m.sources.length, 0)} SOURCES
                        </span>
                      </div>
                      <span className="accordion-caret">{expandedGroups['mars'] ? '−' : '+'}</span>
                    </button>

                    {expandedGroups['mars'] && (
                      <div className="mission-list">
                        {groupedByCategory.mars.map(m => {
                          const open = isMissionOpen(m.id);
                          return (
                            <div key={m.id} className={`mission-ref-item ${open ? 'is-open' : ''}`}>
                              <button
                                className="mission-header-btn"
                                aria-expanded={open}
                                onClick={() => toggleMission(m.id)}
                              >
                                <span className="m-name">{m.mission}</span>
                                <span className="m-count">{m.sources.length} {m.sources.length === 1 ? 'SOURCE' : 'SOURCES'}</span>
                                <span className="m-caret">{open ? '−' : '+'}</span>
                              </button>

                              {open && (
                                <ul className="source-links">
                                  {m.sources.map((s, idx) => (
                                    <li key={s.href + idx} className="source-link-row">
                                      <a href={s.href} target="_blank" rel="noreferrer" className="source-anchor">
                                        <span className="src-title">{s.t} ↗</span>
                                        <span className="src-host">{getHostname(s.href)}</span>
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
                  <div className="ref-category-card">
                    <button
                      className="category-header-btn"
                      aria-expanded={expandedGroups['deep-space']}
                      onClick={() => toggleGroup('deep-space')}
                    >
                      <div className="cat-title-wrap">
                        <span className="cat-name">DEEP SPACE MISSIONS</span>
                        <span className="cat-badge">
                          {groupedByCategory['deep-space'].reduce((a, m) => a + m.sources.length, 0)} SOURCES
                        </span>
                      </div>
                      <span className="accordion-caret">{expandedGroups['deep-space'] ? '−' : '+'}</span>
                    </button>

                    {expandedGroups['deep-space'] && (
                      <div className="mission-list">
                        {groupedByCategory['deep-space'].map(m => {
                          const open = isMissionOpen(m.id);
                          return (
                            <div key={m.id} className={`mission-ref-item ${open ? 'is-open' : ''}`}>
                              <button
                                className="mission-header-btn"
                                aria-expanded={open}
                                onClick={() => toggleMission(m.id)}
                              >
                                <span className="m-name">{m.mission}</span>
                                <span className="m-count">{m.sources.length} {m.sources.length === 1 ? 'SOURCE' : 'SOURCES'}</span>
                                <span className="m-caret">{open ? '−' : '+'}</span>
                              </button>

                              {open && (
                                <ul className="source-links">
                                  {m.sources.map((s, idx) => (
                                    <li key={s.href + idx} className="source-link-row">
                                      <a href={s.href} target="_blank" rel="noreferrer" className="source-anchor">
                                        <span className="src-title">{s.t} ↗</span>
                                        <span className="src-host">{getHostname(s.href)}</span>
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

          <h3>Image credits</h3>
          <p className="credit-list">
            Surveyor 3: NASA, AS12-48-7121 and AS12-48-7133. Apollo 17: NASA, AS17-137-20979 and AS17-145-22162. Opportunity: NASA/JPL-Caltech, PIA06739 and PIA17759. Existing illustrative scenes are not NASA photographs.
          </p>
          <p>
            <a href="https://www.nasa.gov/nasa-brand-center/images-and-media/" target="_blank" rel="noreferrer">
              NASA image and media guidelines ↗
            </a>
          </p>
          <p className="muted">
            Research checked November 11, 2026. Built for an educational storytelling project. NASA does not endorse this site.
          </p>
        </section>
      )}
    </Frame>
  );
}
