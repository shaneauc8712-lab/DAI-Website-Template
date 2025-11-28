07 — Asset Map

Standardized directory + file naming conventions for all Blueprint-based websites.

✅ Purpose of This File

This file defines how all assets must be structured, referenced, named, and stored so that:

✔️ Cline can reliably swap assets
✔️ Codex can polish visuals without guessing
✔️ Future brands can reuse the architecture instantly
✔️ The custom Brand Customization GPT can auto-map file swaps
✔️ The website structure stays universal across all brands

This is the official asset structure for every website built on the Blueprint.

🗂️ 1. Folder Structure (Standardized Across All Sites)

All assets live under /assets and must use this exact structure:

/assets
    /logos
        logo-main.png
        logo-alt.png
        logo-dark.png
        logo-light.png
        favicon.png

    /images
        hero-main.png
        hero-alt.png
        dashboard-1.png
        dashboard-2.png
        section-bg-1.png
        section-bg-2.png
        testimonial-1.png
        testimonial-2.png

    /icons
        icon-1.png
        icon-2.png
        icon-3.png
        check.svg
        x.svg


This structure is the international standard for all future brands and client builds.

🖼️ 2. Asset Naming Rules

To eliminate confusion, rebuild failures, and broken references:

Rule 1 — Lowercase only
hero-main.png
dashboard-1.png

Rule 2 — Hyphens, never spaces
process-systems-synthesis.png

Rule 3 — No underscores

❌ hero_main.png
✔️ hero-main.png

Rule 4 — File types should be consistent

Preferred formats:

.png for logos

.png for hero icons

.jpg / .jpeg for photos

.svg for UI icons

Rule 5 — Do not rename files inside Cline or Codex unless instructed

All asset renaming must be intentional and mapped through this file.

🎨 3. Brand Asset Map (Per Website)

Each brand must provide assets in this format.

A. Logos

Each brand must always supply:

Asset	Required Name	Purpose
Primary Logo	logo-main.png	Header, hero, large placements
Secondary Logo	logo-alt.png	Dark/Light variants
Favicon	favicon.png	Browser icon
Dark Mode Logo	logo-dark.png	On light backgrounds
Light Mode Logo	logo-light.png	On dark backgrounds
B. Hero & Section Images
Asset	Required Name	Purpose
Hero Icon / Main Image	hero-main.png	Hero first fold
Secondary Hero	hero-alt.png	Optional alt hero sections
Dashboard Image 1	dashboard-1.png	For product/system showcase
Dashboard Image 2	dashboard-2.png	For case studies
Background Image	section-bg-1.png	Section backgrounds
Optional BG	section-bg-2.png	Secondary background theme
C. Icons

Icons must follow these naming patterns:

icon-1.png
icon-2.png
icon-3.png
check.svg
x.svg


Icons must always be placed in:

/assets/icons

🔧 4. Asset Path Standards (VERY IMPORTANT)

When referencing assets in HTML, JS, or CSS:

Use relative paths only:

./assets/logos/logo-main.png
./assets/images/hero-main.png
./assets/icons/check.svg


Never use:

❌ Absolute paths
❌ Spaces in folder names
❌ Capital letters

🔄 5. How Assets Are Used in the Blueprint

Each file in /src expects assets in specific locations.

index.html

Uses:

hero-main

logo-main

icons

dashboard images

testimonials (when present)

style.css

References:

background images

icon sizes

section backgrounds

main.js

Controls:

dynamic section assets

fade-in animations

mobile swaps if required

roi-calculator.js

Uses:

result card icons

check / x icons

package-card.js

Uses:

package tier icons

guarantee icons

🔁 6. How BCP (Brand Customization Pass) Uses the Asset Map

The Brand Customization GPT relies on this file to:

✔️ correctly swap hero images
✔️ correctly update logos
✔️ replace icons
✔️ reference dashboards
✔️ generate Cline PLAN instructions with correct paths
✔️ produce Codex polish prompts with exact selectors

This file is the bridge layer between:

The generic blueprint

The brand-specific implementation

📦 7. Example Asset Map for ProSynth (Sample)

(Used only as an example — replace with actual ProSynth files in /assets.)

/assets
    /logos
        logo-main.png (ProSynth full logo)
        logo-alt.png (ProSynth white)
        favicon.png
        logo-dark.png (ProSynth graphite)
        logo-light.png (ProSynth teal)

    /images
        hero-main.png (4.png dashboard)
        hero-alt.png
        dashboard-1.png
        dashboard-2.png
        section-bg-1.png (graphite texture)
        section-bg-2.png

    /icons
        icon-1.png
        icon-2.png
        icon-3.png
        check.svg
        x.svg

📘 8. Asset Checklist Before Running Cline

Before triggering a Cline PLAN:

All assets must be inside /assets

All filenames must follow naming rules

No spaces / no uppercase letters

All logos must be preloaded

All icons must be placed in /icons

Dashboards placed in /images

Hero images validated

Ensure favicon is included

If ANY asset is missing, Cline may fail or skip replacements.
