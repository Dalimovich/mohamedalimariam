# mohamed-ali-mariam.com

Personal portfolio of **Mohamed Ali Mariam** — Mechanical Engineering student at
TU Braunschweig (CAD / SolidWorks / technical drawings), and developer of
**Minallo**, an AI study assistant.

Static bilingual site with separate English and German pages. No build step or
runtime dependencies are required (Inter is loaded from Google Fonts).

## Deploy (Cloudflare Pages)

Connect this repo in Cloudflare Pages with:

- **Framework preset:** None
- **Build command:** *(leave empty)*
- **Build output directory:** `/`

Custom domain: `mohamed-ali-mariam.com` (see the project notes for the IONOS →
Cloudflare nameserver step).

## Edit

The English markup lives in `index.html`, the German markup in `de.html`, shared
styles in `styles.css`, and shared behavior in `script.js`. Design tokens are CSS
variables at the top of the stylesheet; change colors/spacing there to keep the
page consistent.
