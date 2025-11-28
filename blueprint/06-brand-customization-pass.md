06 — Brand Customization Pass (BCP)

Transforming any Blueprint-based system into a fully branded implementation without altering core logic.

Purpose of This File

The Brand Customization Pass (BCP) is a controlled, rules-based translation layer that adapts:

✔️ branding
✔️ naming
✔️ terminology
✔️ content
✔️ visuals
✔️ palette
✔️ workflow naming
✔️ system vocabulary

…WITHOUT changing the underlying architecture of the blueprint.

This allows one standardized blueprint to be reused for:

ProSynth

DejaVu

Catalist

future brands

client projects

partner agencies

BCP = “swap the clothes, not the skeleton.”

🌐 What the BCP Changes

BCP affects brand-facing elements only, including:

1. Branding identity

Logos

Iconography

Color palette

Typography

Tone of voice

2. Naming conventions

Framework names

Methodology names

Tier/package names

CTA copy

Guarantee language

Page titles

Section labels

3. Visual components

Images

Hero graphics

Backgrounds

Dashboard screenshots

Icons

4. Copywriting alignment

Headlines

Subheadlines

Pain points

Transformation statements

Value propositions

CTA descriptions

5. System-specific terminology

For example:

Blueprint Term	ProSynth Version	DejaVu Version
5-Phase Method	Process Systems Synthesis	Elite Sales Engine
ROI Calculator	Operational ROI Model	Revenue Impact Model
Package Names	Clarity / Control / Command	Launch / Leverage / Dominance

BCP automatically generates these translations.

🚫 What the BCP Must NOT Change

The Brand Customization Pass must NEVER change:

❌ Folder/file structure
❌ CSS class names
❌ JS function names
❌ Layout or containers
❌ Section order
❌ Business logic
❌ ROI formulas
❌ Tier logic
❌ Dependencies or architecture
❌ System workflow steps
❌ Any internal blueprint infrastructure

The architecture stays the same →
Only the presentation layer changes.

This is the most important rule of the BCP.

⚙️ Inputs Required for a Perfect BCP

To run the Brand Customization Pass accurately, you must provide:

1. Brand Summary

(High-level overview of the brand)

Example fields:

Brand name

Brand mission

Promise / core transformation

Target audience

Industry focus

Positioning statement

Offer structure

Brand personality (tone)

Visual identity guidelines

2. Master SOP or Blueprint Logic File

This defines:

Workflows

Steps

System logic

Methodology

Terminology

Core functions

Expected outcomes

The BCP does not modify this file — it references it to adapt names/content.

3. Final asset directory

(logo, icons, dashboards, hero images)

Provided as:

/assets/logos
/assets/icons
/assets/images


BCP only needs references — Cline does the insertion.

🔄 How the BCP Outputs the Transformation

The Brand Customization Pass always produces 3 outputs:

Output A — Naming Translation Map

(Everything that must be swapped)

Example:

Blueprint Term → Brand Term
5-Phase Method → Process Systems Synthesis
Package: Starter → Clarity
Package: Growth → Control
Package: Scale → Command
ROI Calculator → Operational ROI Engine

Output B — Page-by-Page Content Map

For each section:

[Hero Section]
Blueprint Headline → Brand Headline
Blueprint Subheadline → Brand Subheadline
Blueprint CTA → Brand CTA
Blueprint Assets → Brand Assets


This is EXACTLY what Cline needs.

Output C — Implementation Instructions for Cline

The BCP produces Cline-ready tasks:

Example:

Update /src/index.html:
- Replace headline text with: "Building Intelligent Systems That Feel Inevitable."
- Swap hero icon with /assets/images/hero-dashboard.png
- Update CTA button to "Calculate My Operational ROI"
- Apply gradient: #C7AE6A → #a6a6a6 (ProSynth palette)


This is formatted as a Cline PLAN block, ready to paste.

🧠 How BCP Integrates With Cline & Codex
Step 1 — You run the custom GPT with:

Brand summary

Master SOP / Blueprint logic

(Optional) list of assets

The BCP GPT generates:

✔️ Naming map
✔️ Content replacements
✔️ Brand-specific tone
✔️ Page-by-page transformation
✔️ A Cline-ready PLAN file
✔️ A Codex-ready polish checklist

Step 2 — You paste the PLAN into Cline (PLAN mode)

Cline rewrites:

text content

brand copy

asset references

CTA labels

value propositions

guarantees

Step 3 — You use Codex in passes

To perfect:

spacing

colors

typography

layout polish

visual alignment

icon sizes

cover images

Codex = polishing phase
Cline = bulk change phase
BCP = translation layer

🧬 BCP Execution Rules (Very Important)

The Brand Customization Pass MUST:

Rule 1 — Preserve architecture

BCP never restructures.

Rule 2 — Maintain section order

The website flows identically across ALL brands.

Rule 3 — All strings → translated

Every piece of text must be swapped:

headings

subheadings

microcopy

menu items

CTA buttons

card labels

FAQ content

Rule 4 — Asset references must match file names exactly

Example format:

./assets/images/prosynth-icon.png


Spacing, capitalization, and extension must be exact.

Rule 5 — Guarantees must adapt to the brand's promise

But must keep the same guarantee structure used across brands.

Rule 6 — Tier logic stays the same

Only the names change.

Rule 7 — ROI calculator stays the same

Only:

labels

text blocks

card titles

UI language

…are modified.

🧱 Example BCP Output (Mini-Sample)
[Brand: ProSynth]

Update Hero:
- Headline: “Operational Intelligence That Feels Inevitable.”
- Subheadline: “We build systems that remove friction, reduce chaos, and increase utilization.”
- CTA 1: “Calculate My Operational ROI”
- CTA 2: “Book Your Systems Audit”
- Replace hero icon with ./assets/images/4.png

Update Packages:
Starter → Clarity Package
Growth → Control Package
Scale → Command Package

Update Guarantee:
Replace revenue guarantee with:
“The Triple Operational Guarantee — Clarity, Control, Command.”

🔥 Final Deliverables from BCP

The Brand Customization Pass always produces:

Naming Dictionary

Brand-Aligned Copy Replacements

Page-by-Page Content Map

Updated Guarantees

Updated Tier Names

Updated CTA Copy

Brand Visual Mapping

Cline PLAN Prompt

Codex Polish Checklist

Optional: Folder Map Adjustments

This becomes the full blueprint for brand adaptation.
