09 — Common Fix Library

Your universal troubleshooting + repair toolkit for all website Blueprint builds.

🎯 1. Purpose of This File

This file contains the most common issues that occur when:

Cline rewrites files

Codex edits individual components

Images/icons don’t load

Spacing breaks

Sections disappear

Styling collapses

File paths mismatch

ROI calculator logic errors occur

Every fix is written in a way that Cline and Codex can execute with ZERO guesswork.

🧱 2. High-Level Categories of Fixes

This library covers:

🔗 FILE PATH FIXES (images, icons, CSS, JS)

🎨 UI / LAYOUT FIXES (spacing, padding, responsiveness)

🧮 ROI CALCULATOR FIXES

🧬 PACKAGE CARD FIXES

📦 ASSET IMPORT FIXES

🔥 CLINE MISBEHAVIOR FIXES (overwrites, broken indexes)

🧹 CLEANUP FIXES (duplicate pages, unused code)

🔗 3. File Path Fixes (MOST COMMON ISSUE)
A. Wrong folder name / spacing

Cline often misreads folder names with spaces.

Correct format:

./PROSYNTH Assets/4.png
./assets/logos/prosynth-logo-full.png
./assets/images/hero-gears-gold.png


If Codex fails to load an image:

Fix Prompt (Codex)
Find all image src values in index.html that reference incorrect paths.
Update them to use the correct folder: './assets/images/'.
Ensure the filename and capitalization match exactly.

B. JS or CSS not loading

Always check:

<script src="./main.js"></script>
<link rel="stylesheet" href="./style.css">

Fix Prompt (Codex)
Search index.html for any script or stylesheet references that do not match the actual filenames.
Correct them and ensure they point to ./src files.

🎨 4. UI / Layout Fixes
A. Hero spacing too large / too small

Fix:

padding: 80px 0;
max-width: 1200px;
margin: 0 auto;


Codex prompt:

Locate the hero section container. Reduce the top/bottom padding by 40%. 
Ensure the text and icon remain vertically centered.

B. Footer not sticking to bottom

Fix:

footer {
  margin-top: 120px;
}

C. Icons too large or too small

Fix:

.hero-icon {
  width: 350px;
  height: auto;
}


Codex prompt:

Increase the hero icon width to 350px. Maintain responsiveness using max-width: 100%.

D. Mobile layout breaking

Fix:

@media (max-width: 768px) {
  display: block;
  text-align: center;
  padding: 40px 0;
}


Codex prompt:

Audit all flex layouts for responsiveness. Add a breakpoint at max-width: 768px to stack columns vertically.

🧮 5. ROI Calculator Fixes
A. Values showing NaN (most common)

Cause: empty input fields or wrong variable names.

Fix:

parseFloat(input.value) || 0


Codex prompt:

In roi-calculator.js, wrap all input conversions using parseFloat(...) || 0 to prevent NaN outputs.

B. Annual values not updating

Fix:

annualValue = monthlyValue * 12;

C. Tier prices not showing

Fix: ensure variable exports/imports are correct.

In tierLogic.js:

export function calculateTierPrices(totalMonthlyValue) { ... }


In main.js:

import { calculateTierPrices } from './tierLogic.js';


Codex prompt:

Fix any missing import/export links between roi-calculator.js, tierLogic.js, and main.js.

🧬 6. Package Card Fixes
A. Wrong prices displaying

Fix:

document.getElementById('starterPrice').innerText = `$${starterPrice}`;


Codex prompt:

Ensure every package card element ID matches the ID used in main.js.

B. Cards not updating after input

Fix: ensure this event listener exists:

calculateButton.addEventListener('click', updateUI);

📦 7. Asset Import Fixes
A. New logos not showing

Fix:

<img src="./assets/logos/prosynth-logo-full.png" alt="ProSynth Logo" />


Ensure:

correct file extension

correct casing

correct folder

🔥 8. Cline Misbehavior Fixes
A. Cline overwrote index.html or deleted sections

Fix prompt:

Cline, recreate /src/index.html using the Blueprint layout. Preserve all sections and placeholders. Do not redesign anything.

B. Cline injected blank files

Fix prompt:

Cline, rewrite index.html using the original DejaVu structure, keeping the layout identical.

🧹 9. Cleanup Fixes

Common redundancies:

duplicate footer

duplicate hero

leftover DejaVu sections

empty <div></div> from Cline

Fix prompt:

Search index.html for duplicate sections. Remove the redundant ones while preserving the Blueprint structure.
