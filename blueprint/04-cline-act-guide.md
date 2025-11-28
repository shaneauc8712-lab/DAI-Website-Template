04 — Cline ACT Guide (Safe Execution Instructions)

This file contains the ONLY correct method for executing file writes through Cline (ACT Mode) without breaking the site.

Purpose of This File

Cline ACT Mode is powerful — but dangerous if misused.

This guide ensures that when Cline executes writes:

🔒 No structural damage occurs

🔄 No accidental full-file overwrites

🧱 No removed containers or broken layouts

🎯 Only instructed sections are updated

📦 Chunked writes avoid timeouts & truncation

🧩 JavaScript logic stays intact

🔗 Asset references remain valid

This is the official safe-use instruction manual for ACT Mode inside the Website Blueprint System.

✅ HOW TO USE CLINE ACT MODE

When you are ready to implement changes after PLAN MODE:

You give Cline a single, clear ACT command, using this exact template:

# CLINE ACT MODE — EXECUTE CHANGES SAFELY

You are now operating in ACT MODE.

Follow ONLY the operation list generated in PLAN MODE.
Do NOT make any assumptions.
Do NOT restructure anything unless explicitly instructed.

Rules:
- Only write to the files listed.
- Only modify the sections specified.
- Do not alter containers above or below the specified block.
- Use chunked writes when modifying large HTML files.
- Always show the updated code BEFORE writing it.
- Confirm paths EXACTLY as shown in the repo.

Execution Steps:
1. Show the diff or updated code block for approval.
2. Wait for the user to respond: “Approve”.
3. After approval, perform the write.
4. After writing, return: “Write successful”.
5. Stop. Do NOT continue beyond the approved chunk.

Safety:
- Never rewrite entire index.html unless explicitly instructed.
- Never modify unrelated JS functions.
- Never touch the ROI logic unless the user approves.
- Never move or rename image files.
- Never delete comments that mark layout boundaries.

WAIT for user approval before writing each chunk.

🔒 CRITICAL SAFETY RULES FOR ACT MODE

Cline must follow these rules every time:

❌ NEVER DO:

Don't write the whole file unless explicitly told.

Don't modify markup outside the targeted region.

Don't touch unrelated classes or style references.

Don't regenerate files from scratch.

Don't assume missing HTML should be removed.

Don't replace or generate placeholder images.

Don’t merge sections or reorder containers.

✔️ ALWAYS DO:

Modify only inside the replacement block.

Keep the component, ID, and class naming identical.

Respect <!-- SECTION START --> comment markers.

Use pre-approved asset paths from /assets/...

Run diff → wait for approval → then write.

🔧 CHUNKING RULES

HTML files can be long — Cline MUST chunk safely.

Chunk Rule:

Modify one section at a time, e.g.:

Header

Hero

Pains section

Phases section

ROI calculator container

Packages section

Guarantee block

FAQ

Footer

Example Chunk Command:
Modify ONLY the hero headline inside index.html.
Do not modify any other part of the hero section.
Show me the updated snippet first.


Then after inspection:

Approve — write chunk 1.


Then proceed to chunk 2.

🧩 ACT MODE UPDATE WORKFLOW (REQUIRED)

Cline MUST follow this order for EVERY change:

Locate the section

Show proposed updated code block

Wait for “Approve”

Write the updated code ONLY

Return “Write complete”

Stop and wait for next instruction

This prevents accidental overwrites.

📘 GUIDE: HOW TO REQUEST CHANGES IN ACT MODE

Use one of these patterns:

1. Precise revision:
Cline, modify ONLY the subheadline inside the hero section.
Do not touch any other code above or below it.
Show the proposed snippet.

2. Replace entire section safely:
Replace the entire Guarantee section.
Keep the container IDs identical.
Show diff before writing.

3. Update JS logic:
Modify ONLY the value calculation in roi-calculator.js.
Do not alter event listeners or DOM selectors.
Show updated function first.

4. Add a new asset reference:
Add this image inside the Packages section.
Use path: ./assets/images/dashboard-1.png
Show snippet before writing.

🎯 ACT MODE EXAMPLE COMMAND (PERFECT TEMPLATE)

Use this when instructing Cline:

Cline — ACT MODE
Modify ONLY the text inside the “pains-section” paragraph in index.html.

Steps:
1. Locate the pains container.
2. Show the updated paragraph only.
3. Wait for confirmation.
4. After approval, update only that block.
5. Do not change structure, classes, or nearby sections.

🧱 WHAT TO DO IF CLINE MISBEHAVES

If Cline:

rewrites too much

deletes code

ignores paths

modifies unrelated areas

Then immediately say:

“STOP. Revert. Return the last known good version.”

And Cline must:

cancel the operation

return the unmodified file

📌 FINAL NOTES

This ACT guide ensures:

safe structural updates

pixel-perfect layout preservation

stable HTML/CSS/JS architecture

smooth use of Cline + Codex + versioning

It is mandatory for all brand customization passes and all future website rebuilds.
