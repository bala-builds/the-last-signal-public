# THE LAST SIGNAL

Clean standalone contribution source for an independent educational NASA-storytelling website.

## Included

- 41 picture-book mission stories, each with eight to twelve distinct scenes.
- 33 completed or lost mission records in Archive and Final Signal.
- Eight ongoing missions kept separately in Still Exploring.
- 17 equipment explorers. Voyager 1 and Voyager 2 share the Voyager twins explorer.
- Separate Stories, Equipment, Archive, Still Exploring and reference pages.

This source includes all supplied PDF mission stories, including Peregrine, IM-2 Athena, IM-1 Odysseus, Blue Ghost Mission 1 and Lunar Trailblazer. The existing live website now serves this 41-story collection, published and checked November 11, 2026. This repository does not trigger automatic production deployment.

All supplied PDF mission cards are implemented. Lunar Trailblazer is a NASA small orbiter, not a commercial lander.

## Run locally

Install Node.js 20 or newer and make sure `tar` is available on your PATH (Linux, macOS and current Windows installations normally provide it).

```sh
npm ci
npm run dev
npm run build
npm run preview
```

`dev` and `build` first restore the credited images, models and fonts from the ordered asset-bundle parts. Every part and the assembled archive are checked with SHA256 before extraction. The bundle keeps large image/model files manageable while the application source stays directly editable in Git. The older Surveyor 3 scroll-image sequence is restored with the media bundle. Do not edit a part by hand. The asset directories are ignored after extraction.

`npm run build` produces the static site in `dist`. Client-side routes need a static host fallback to `index.html`. `scripts/page-metadata.mjs` generates per-route metadata and direct-entry HTML. Its canonical origin is the existing live site, https://the-last-signal-lime.vercel.app/ . Do not change production deployment or the canonical origin as part of an unrelated PR.

## Contribute

Fork this repository, create a branch, make your change and open a pull request. The project owner reviews and merges PRs. See CONTRIBUTING.md. No account token, database or paid service is needed to run the app locally.

## Evidence and media

Source URLs, image descriptions and credits are recorded in STORY-SOURCE-LEDGER.json and beside the scenes. NASA photographs, science products, diagrams, artist concepts and symbolic illustrations are labeled separately. Educational 3D exteriors are not exact flight CAD, real interiors, live telemetry or accident reconstructions. Historical scene dates and later context-image dates are kept separate.

Animation uses React, Three.js, CSS and SVG. No Google Flow videos or invented final words are presented as NASA records. The site is independent and is not endorsed by NASA.

## Rights

Public visibility does not grant a new blanket license to this project's original code or content. No project-wide open-source license is added. Third-party software and fonts retain their existing licenses, included with the asset bundle where applicable. NASA and partner media retain their source-specific terms and credits. Do not assume that every image on a NASA page is NASA-owned or public domain. LROC image credit: NASA/GSFC/Arizona State University, used for this educational project under the LROC terms. Check each original source before reusing media elsewhere.

## Checks and limits

The source was built and visually checked at phone and desktop widths. The full 41-story collection passed 682 scene/image/overflow checks at 320 and 1280px with no errors. Each of the five most recent stories passed 27 new scene/collection checks at 320, 390 and 1280px with no broken images, horizontal overflow or recorded runtime exceptions. The live release also passed 134 scene and main-page checks at 320, 390 and 1280px, plus 51 public route/title checks. These are scoped checks, not a complete accessibility audit. Instagram's in-app browser, live telemetry and the current condition of distant hardware are not verified.
