02 — File Structure Specification

Directory Map + Purpose + Usage Rules

This document defines the required folder structure, file purposes, and usage guidelines for the Website Blueprint.
It ensures every website built using this blueprint remains consistent, scalable, and compatible with Cline (PLAN + ACT) and Codex.

1. Top-Level Directory Structure
/blueprint
/src
/assets


Each folder is described below.

2. /blueprint Folder (Documentation Layer)

Holds all blueprint documentation and instruction files.

File Name	Purpose
01-overview.md	High-level explanation of the blueprint, tech stack, and purpose.
02-file-structure.md	Defines the folder structure and rules for placing files. (This file)
03-cline-plan-prompt.md	The master PLAN prompt that initializes the build for Cline.
04-cline-act-guide.md	Guide for using Cline in ACT mode to regenerate or modify files.
05-codex-editing-guide.md	Instructions for using Codex to perform precision edits.
06-brand-customization-pass.md	The template used by your custom GPT to adapt the blueprint to any brand.
07-asset-map.md	Defines required images, logos, icons, and their expected folder paths.
08-roi-logic-map.md	Explains ROI formulas, logic flow, and where updates live in the code.
09-common-fix-library.md	Solves common issues with Cline, Codex, or build errors.
10-versioning-rules.md	How to update versions, track changes, and maintain repo hygiene.
3. /src Folder (Core Application Layer)

Contains all source files that define the website’s UI, layout, and interactivity.

/src
    index.html
    style.css
    main.js
    roi-calculator.js
    tierLogic.js
    package-card.js
    copy-library.json

Purpose of Each File
File	Description
index.html	Root HTML for the site — layout, sections, containers.
style.css	Global styles, colors, layout rules, animations, brand tokens.
main.js	Global JS for interactions, animations, toggles, UI logic.
roi-calculator.js	Full ROI calculator logic (inputs → formulas → output).
tierLogic.js	Logic for package tier recommendations.
package-card.js	Dynamic rendering of package cards (clarity/control/command or new tiers).
copy-library.json	Centralized storage for text blocks, CTA copy, headings, guarantees, etc.
4. /assets Folder (Static Asset Layer)

Holds all static media required by the site.

/assets
    /logos
    /images
    /icons

Folder Purposes
Folder	Purpose
/logos	Brand logos (full logo, mark, inverse, dark/light variants).
/images	Hero images, dashboards, background textures, section visuals.
/icons	Small UI icons, SVGs, decorative elements.
File Rules

All file names must be lowercase with dashes.
Example: prosynth-logo-dark.png

Cline and Codex are extremely sensitive to spaces — never use spaces.

When referencing images in /src files, paths must be relative, e.g.:

src="./assets/images/hero-dashboard.png"

5. Required Files for a Fully Functional Website

To guarantee Cline can regenerate correctly:

Mandatory HTML

index.html

Mandatory CSS

style.css

Mandatory JS

main.js

roi-calculator.js

tierLogic.js

package-card.js

Mandatory Assets

At least:

1 logo (full)

1 icon (brand mark)

1 hero image

1 dashboard-style image

3 supporting images for sections

6. Rules for File Management
Rule 1 — Never Rename Files Mid-Build

Cline and Codex rely on stable file paths.

Rule 2 — Never Change Folder Structure Without Updating Blueprint Files

If structure changes, update:

02-file-structure.md

07-asset-map.md

03-cline-plan-prompt.md

Rule 3 — Add New Sections to copy-library.json

Always centralize text content here.

Rule 4 — Always Commit After Each Major Change

Small commits → easier rollback.

7. How Cline Uses This Structure

Cline PLAN mode reads:

/blueprint/** files

/src/** to understand what to modify

/assets/** for correct file references

Cline ACT mode writes changes back into /src and may copy assets into /assets.

Codex refines everything inside /src only.

8. How the Brand Customization Pass Uses This Structure

Your custom GPT standardizes:

Names for files

Required sections

Asset expectations

ROI logic consistency

UI/UX vocabulary

Layout structure stability

It outputs a brand-aligned implementation plan, which you then feed into Cline PLAN mode.

9. Summary

This file structure creates a repeatable, scalable, zero-guesswork environment for:

ProSynth

DejaVu

Catalyst

Future brands

Client builds

Every site follows the exact same skeleton → every brand becomes a plug-and-play experience.
