05 — Codex Editing Guide (Precision UI/UX Modification Manual)

Codex is your scalpel. It performs fine-grained, pixel-perfect edits that Cline cannot safely execute.

Purpose of This File

Codex is designed for:

🎨 UI/UX refinement

✏️ Micro-edits inside HTML/CSS/JS

🪶 Styling precision

📐 Spacing, alignment, layout tuning

🖼️ Image swaps / asset updates

🧩 Component-level adjustments

Codex does not make structural decisions — that’s Cline’s job.
Codex fine-tunes the work Cline already generated.

🔥 WHEN TO USE CODEX (RULES)

Use Codex when:

✔️ A specific part of the UI looks wrong
✔️ Spacing/padding/margins need refinement
✔️ A single element needs updating
✔️ Colors, fonts, or icons must be corrected
✔️ A snippet of JS logic needs micro-updates
✔️ A single component must be polished

Do NOT use Codex for:

❌ Full file rewrites
❌ Structure changes
❌ Reordering sections
❌ Creating new containers
❌ Merging layouts
❌ Updating the entire repo
❌ Bulk logic updates

🌐 THE PHILOSOPHY OF CODEX WORK

Codex should always:

Work on one component at a time

Show the exact updated block before writing

Respect existing HTML structure

Preserve class names + IDs

Maintain spacing, indentation, and readability

Avoid assumptions

Follow asset paths EXACTLY

Codex is not allowed to restructure unless explicitly told.

🎯 HOW TO REQUEST EDITS FROM CODEX

Codex responses must always follow this pattern:

1. Locate the section

Codex finds the exact block based on keywords or IDs.

2. Show a proposed updated snippet

Codex returns ONLY the relevant portion, not the whole file.

Example:

Here is the updated hero headline block:
<div class="hero-headline">
  <h1>Your Updated Headline Here</h1>
</div>

3. Wait for approval

You will say:

“Approve — write it.”

4. Codex writes the change

Codex performs the update inside the file.

5. Codex confirms success

Returns:

“Update applied successfully.”

🧱 STRUCTURE OF A PERFECT CODEX REQUEST

Here’s the ideal instruction pattern:

Pattern A — Modify a specific block
Codex, modify ONLY the hero subheadline in index.html.
Do not touch the headline or button group.
Show me the updated snippet before writing.

Pattern B — Update an asset
Codex, replace the hero image with:
./assets/images/hero-dashboard.png

Modify only the <img> tag inside the hero container.
Show me the updated snippet before writing.

Pattern C — Fix spacing
Codex, add 40px margin-top to the .roi-section title.
Modify only the CSS rule for .roi-section h2 in style.css.
Show snippet first.

Pattern D — Micro-edit JavaScript
Codex, update ONLY the monthlyValue calculation in roi-calculator.js.
Do not edit any DOM selectors or unrelated logic.
Show the updated function before writing.

🎨 UI/UX COMPONENTS CODEX IS RESPONSIBLE FOR

Codex handles:

Typography

Font weights

Font sizes

Line-height

Letter-spacing

Colors

Brand palette integration

Button hover states

Background gradients

Section dividers

Spacing

Padding

Margins

Alignment

Gaps

Layout Polishing

Flexbox tuning

Grid refinements

Card balance

Section readability

Asset Handling

Icon swaps

Hero background images

Dashboard images

Decorative elements

Component Enhancement

Guarantee cards

Package cards

FAQ toggle styling

CTA button interactions

🔧 HOW CODEX DIFFERS FROM CLINE
Feature	Cline	Codex
Structural changes	✔️ Yes	❌ No
Section creation	✔️ Yes	❌ No
Precision styling	❌ Weak	✔️ Strong
File write behavior	Bulk	Surgical
Risk level	High	Low
Best use-case	Build	Polish
Ideal workflow	PLAN → ACT	Final polish
🔒 CRITICAL SAFETY RULES

Codex MUST obey:

❗ Never produce entire index.html

Only snippets.

❗ Never remove classes

Unless explicitly instructed.

❗ Never rename IDs

This breaks JS logic.

❗ Never refactor logic

Unless micro-changes requested.

❗ Never auto-tidy or auto-format

Formatting must remain consistent with repo style.

❗ Never move file paths

Asset directory structure is fixed by the Blueprint.

🧩 PERFECT EXAMPLE REQUEST
Codex, update ONLY the main headline inside the hero section of index.html.

Instructions:
- Keep the <div class="hero-content"> container intact.
- Replace ONLY the <h1> text.
- Do not modify spacing, buttons, or background image.
- Show me the updated snippet first.


Codex responds:

Here is the updated snippet (not applied yet):
...


You approve → Codex writes → Done.

📌 FINAL NOTES

Codex is for:

pixel perfection

micro UI refinements

safe, targeted edits

stylistic consistency

finishing touches

Cline builds.
Codex perfects.

This file is required for every brand implementation based on this blueprint.
