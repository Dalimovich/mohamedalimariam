# mohamed-ali-mariam.com

Personal portfolio of **Mohamed Ali Mariam** — Mechanical Engineering student at
TU Braunschweig (CAD / SolidWorks / technical drawings), and developer of
**Minallo**, an AI study assistant.

Static, single-file site: [`index.html`](index.html). No build step, no
dependencies (Inter is loaded from Google Fonts).

## Deploy (Cloudflare Pages)

Connect this repo in Cloudflare Pages with:

- **Framework preset:** None
- **Build command:** *(leave empty)*
- **Build output directory:** `/`

Custom domain: `mohamed-ali-mariam.com` (see the project notes for the IONOS →
Cloudflare nameserver step).

## Edit

Everything lives in `index.html` — markup, CSS (in `<style>`), and a small
reveal-on-scroll script. Design tokens are CSS variables at the top of the
stylesheet; change colors/spacing there to keep the page consistent.
