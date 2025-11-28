10 — Versioning Rules

How to evolve the Website Blueprint safely, predictably, and without breaking future builds.

🎯 1. Purpose of This File

The goal of these versioning rules is to ensure:

Blueprint stability

Predictable updates

Zero-breaking changes

Reusable system architecture

Reliable brand customization passes

Cline + Codex compatibility across all versions

This file prevents Blueprint drift and guarantees that any brand built using this system will follow the same structure and logic.

🔢 2. Version Number Format

We use Semantic Versioning (SemVer):

MAJOR.MINOR.PATCH

MAJOR — breaking changes

Changes that modify structure, rename files, or impact Cline/Codex compatibility.

MINOR — new features

Additions that DO NOT break compatibility:

new sections

new logic modules

new asset guidelines

expanded fix library

PATCH — bugfixes

Small corrections:

path fixes

spacing fixes

typos

logic corrections

🚨 3. What Counts as a Breaking Change (MAJOR)?

Any change that forces you to modify:

/src/index.html layout structure

file names inside /src

folder structure inside /assets

Cline Plan prompt architecture

Cline Act guide steps

Magic placeholders

ROI logic architecture

Package card logic

Examples of MAJOR changes:

❌ Renaming roi-calculator.js
❌ Removing the hero section
❌ Changing folder structure
❌ Adding nested folders inside /src
❌ Changing IDs used by JavaScript
❌ Changing the blueprint file order
❌ Rewriting Codex editing principles

If it breaks any existing brand builds → MAJOR.

🆕 4. What Counts as a Feature Addition (MINOR)?

Anything that adds to the Blueprint WITHOUT breaking compatibility.

Examples:

✔️ Adding new documentation files
✔️ Adding optional CTA templates
✔️ Adding more examples in fix library
✔️ Improving ROI formulas (backward compatible)
✔️ Adding more asset mapping rules
✔️ New Codex editing tips
✔️ Expanded brand customization guidance

These are safe to ship as MINOR.x updates.

🔧 5. What Counts as a Bugfix (PATCH)?

Minor fixes that don’t alter how the Blueprint works.

Examples:

✔️ Fix incorrect image path
✔️ Fix spacing in hero
✔️ Update ROI text values
✔️ Fix missing export statement
✔️ Correct typos in README
✔️ Update Codex instructions
✔️ Replace outdated references

These are PATCH updates.

🗂️ 6. Folder-Level Version Control

Every Blueprint must maintain:

/blueprint
/src
/assets


If any of these folders change structurally, it is a MAJOR version bump.

Rules:

Never rename /src

Never rename /assets

Never rename /blueprint

Only add new files (MINOR)

Only fix existing files (PATCH)

🧬 7. Code-Level Version Control

Every file inside /src must also maintain compatibility:

Major changes

Changing component IDs, removing functions, or renaming modules.

Minor changes

Adding optional functions or new sections that don't break existing logic.

Patch changes

Formatting, spacing, bugfixes, consistent naming.

🔁 8. Versioning Workflow
Step 1 — Identify the type of change

Use the MAJOR/MINOR/PATCH rules above.

Step 2 — Update version number

Found in:

README.md
blueprint/01-overview.md


Format:

v1.0.0 → v1.1.0 → v1.1.1 → v2.0.0

Step 3 — Document the changes

Update this section:

# Version Changelog

Step 4 — Commit the update

Git commit message format:

MAJOR: Updated folder structure and modified ROI components
MINOR: Added new guarantee templates
PATCH: Fixed image path in index.html

Step 5 — Push to GitHub
git add .
git commit -m "MINOR: Updated package component docs"
git push

🧱 9. Version Changelog Template

Paste this at the bottom of the file:

---

# Version Changelog

## v1.0.0
- Initial release of the Website Blueprint
- Includes structure, Cline prompts, Codex guide, asset map, ROI logic map, fix library, and versioning rules

## vX.Y.Z
- [Describe updates here]

🔐 10. Version Enforcement Rules

To protect the Blueprint quality:

Rule 1 — No breaking changes without MAJOR bump
Rule 2 — Never rename core folders
Rule 3 — Always update the changelog
Rule 4 — Use precise commit messages
Rule 5 — All brand builds must match the Blueprint version they started from
Rule 6 — Never update Blueprint files inside a brand repo
Rule 7 — All fixes must be tested on 2 separate repos:

a fresh blank test repo

an active brand repo
