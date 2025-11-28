/* =========================================================
   WEBSITE BLUEPRINT — TIER LOGIC MODULE
   Neutral, brand-agnostic template for use in all builds
   ========================================================= */

/*
   This module provides a clean interface for mapping ROI output
   to recommended service tiers (Starter / Growth / Scale).
   - The underlying math is intentionally generic.
   - The Brand Customization Pass will replace this logic.
*/

/* ---------------------------------------------------------
   Universal Tier Thresholds (Neutral Placeholders)
   These are NOT final formulas — each brand customizes them.
--------------------------------------------------------- */
const tierThresholds = {
    starter: 5000,   // Placeholder: <= $5k monthly value → Starter Tier
    growth: 20000,   // Placeholder: $5k–$20k monthly value → Growth Tier
    scale: 20001     // Placeholder: > $20k monthly value → Scale Tier
};

/* ---------------------------------------------------------
   Determine Recommended Tier (Neutral)
--------------------------------------------------------- */
function determineTier(totalValue) {
    if (totalValue <= tierThresholds.starter) {
        return {
            name: "Starter",
            description: "Entry-level tier for companies beginning their system optimization journey.",
            badge: "tier-starter",
        };
    }

    if (totalValue <= tierThresholds.growth) {
        return {
            name: "Growth",
            description: "Best for businesses scaling delivery, needing deeper automation and visibility.",
            badge: "tier-growth",
        };
    }

    return {
        name: "Scale",
        description: "High-impact tier for teams requiring full operational intelligence and automation.",
        badge: "tier-scale",
    };
}

/* ---------------------------------------------------------
   UI Integration Function
   - Accepts calculated ROI output
   - Updates the front-end tier card
--------------------------------------------------------- */
function updateTierRecommendation(totalValue) {
    const tier = determineTier(totalValue);
    const tierEl = document.getElementById("recommended-tier");

    if (!tierEl) return;

    tierEl.innerHTML = `
        <div class="tier-recommendation ${tier.badge}">
            <h3>Recommended Tier: ${tier.name}</h3>
            <p>${tier.description}</p>
        </div>
    `;
}

/* ---------------------------------------------------------
   Debugging
--------------------------------------------------------- */
if (window.location.search.includes("debug=true")) {
    console.log("[Blueprint TierLogic Loaded]");
}

/* Export global functions */
window.updateTierRecommendation = updateTierRecommendation;
window.determineTier = determineTier;
