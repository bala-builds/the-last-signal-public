import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Site, Machines, Equipment, About, StoryPage, Archive, Stories, Signal, References, StillExploring, NotFound } from '../site/Site';
import { films } from '../site/films';
import './base.css';
import PageMetadata from '../site/PageMetadata';

// Standalone app entry point.
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <PageMetadata />
    <Routes>
      <Route path="/" element={<Site />} />
      <Route path="/references" element={<References />} />
      <Route path="/still-exploring" element={<StillExploring />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/stories" element={<Stories />} />
      <Route path="/signal" element={<Signal />} />
      <Route path="/missions" element={<Machines />} />
      <Route path="/equipment" element={<Equipment />} />
      <Route path="/about" element={<About />} />
      <Route path="/machines" element={<Machines />} />
      {Object.keys(films).map((id) => <Route key={id} path={`/${id}`} element={<StoryPage id={id} />} />)}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
