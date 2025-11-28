08 — ROI Logic Map

The official ROI calculation and pricing logic for all Blueprint websites.

🎯 1. Purpose of This File

This file defines the exact ROI logic, formulas, calculations, and pricing structure used by:

ProSynth

DejaVu

Catalist

Client brands built on the Blueprint

This ensures:

✔️ Cline always applies correct formulas
✔️ Codex edits remain consistent
✔️ ROI calculators never break
✔️ Pricing is uniform across brands
✔️ The Brand Customization GPT can adapt copy + math without confusion

🧮 2. Overview of ROI Framework

The ROI system converts operational improvements into measurable outcomes.

There are three ROI categories:

1. Revenue ROI

Gains created via automation, reduced delays, faster delivery, improved throughput.

2. Time Savings ROI

Hours saved per team member × hourly cost.

3. Capacity ROI

Additional deliverables the team can handle without hiring more staff.

The calculator returns:

Monthly Value Created

Annual Value Created

Recommended Monthly Fee

Recommended Setup Fee

Pricing Tier Suggestions

📊 3. Core Inputs Required

Every ROI calculator (web & internal) must use these inputs:

Input	Description
qualifiedLeadsPerMonth	# of new qualified leads generated per month
closeRatePercent	% of those leads who convert
averageDealValue	Value of a closed deal
teamMembers	Total staff impacted by automation
hoursSavedPerMember	Monthly hours saved per team member
hourlyCostPerMember	Cost per hour for each team member
currentUtilizationPercentage	Current % workload each team member is operating at
targetUtilizationPercentage	85% recommended
currentMonthlyRevenue (optional)	Only if the client wants to disclose

These inputs power all three ROI categories.

🧠 4. Exact ROI Formulas (Use These Only)
✅ A. Revenue ROI (automation-driven revenue increase)
monthlyRevenueROI = qualifiedLeadsPerMonth 
                   * (closeRatePercent / 100) 
                   * averageDealValue

✅ B. Time Savings ROI
monthlyTimeSavingsROI = teamMembers 
                      * hoursSavedPerMember 
                      * hourlyCostPerMember

✅ C. Utilization ROI (capacity expansion)
currentCapacity = teamMembers * currentUtilizationPercentage
targetCapacity = teamMembers * targetUtilizationPercentage

capacityGain = targetCapacity - currentCapacity

utilizationROI = capacityGain * hourlyCostPerMember * 160


(160 = average billable work hours per month)

✅ D. Total Monthly Value Created
totalMonthlyValue = monthlyRevenueROI 
                  + monthlyTimeSavingsROI 
                  + utilizationROI

💰 5. Pricing Logic (Standardized Across All Brands)

Pricing must always follow these rules (from ZenPilot + your modifications):

Monthly Fee Formula
monthlyFee = totalMonthlyValue * chosenROIpercentage


Where chosenROIpercentage falls between:

0.10 → 0.30  (10%–30% of value created)


Use:

Starter Tier = 10%

Growth Tier = 20%

Scale Tier = 30%

Setup Fee Formula
setupFee = monthlyFee * setupMultiplier


Where setupMultiplier is:

0.8 → 1.5


Standard:

Starter = 0.8×

Growth = 1.0×

Scale = 1.5×

🧱 6. ROI-Driven Package Mapping (Universal Across Blueprint)
Starter (Clarity)

ROI percentage: 10%

Setup multiplier: 0.8×

Minimum term: 3 months

Growth (Control)

ROI percentage: 20%

Setup multiplier: 1.0×

Minimum term: 4 months

Scale (Command)

ROI percentage: 30%

Setup multiplier: 1.5×

Minimum term: 6 months

📦 7. Required Output Values (Displayed on Website)

The website calculator must always produce:

Output	Formula
Monthly Value Created	totalMonthlyValue
Annual Value Created	totalMonthlyValue × 12
Starter Price	totalMonthlyValue × 0.10
Growth Price	totalMonthlyValue × 0.20
Scale Price	totalMonthlyValue × 0.30
Setup Fee (Starter)	Starter Price × 0.8
Setup Fee (Growth)	Growth Price × 1.0
Setup Fee (Scale)	Scale Price × 1.5
🔧 8. Where ROI Logic Lives (Code Map)
File	Purpose
roi-calculator.js	Handles all ROI math & rendering
tierLogic.js	Handles monthly/annual tier pricing
package-card.js	Injects pricing into UI elements
copy-library.json	Stores text for ROI explanations

The logic in this file must always override any previous calculator formulas.

🔁 9. How the Brand Customization GPT Uses This File

The BCP uses this file to:

✔️ generate new ROI formulas for new clients
✔️ ensure no incorrect calculations get reused
✔️ update code files precisely
✔️ rewrite pricing tiers based on brand voice
✔️ adjust calculator labels automatically
✔️ guide Cline on where to insert formulas

This ensures TOTAL consistency across brands.

🧪 10. Testing Rules (Before Deploy)

Before shipping a final version, verify:

Negative values never appear

Setup fees always match monthly fees × multipliers

ROI is rounded to 2 decimals

Tier logic activates correctly

Annual values = monthly × 12

Missing inputs produce warnings, not blank pages
