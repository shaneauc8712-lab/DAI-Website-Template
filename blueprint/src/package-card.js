/* =========================================================
   WEBSITE BLUEPRINT — PACKAGE CARD MODULE
   Neutral, brand-agnostic template for all implementations
   ========================================================= */

/*
    This module renders the three-tier package cards (Starter / Growth / Scale).
    - All descriptions, features, and price values are placeholders.
    - The Brand Customization Pass will replace these during implementation.
*/

/* ---------------------------------------------------------
   Placeholder Package Definitions (Brand-Agnostic)
--------------------------------------------------------- */
const packageTemplates = {
    starter: {
        name: "Starter",
        price: "TBD",
        description: "Entry-tier implementation for businesses beginning their optimization journey.",
        features: [
            "Foundation workflow setup",
            "Basic system alignment",
            "Initial reporting visibility",
            "Email support"
        ]
    },

    growth: {
        name: "Growth",
        price: "TBD",
        description: "Mid-tier package for businesses scaling delivery and needing deeper automation.",
        features: [
            "Full workflow library deployment",
            "Automation layer integration",
            "Visibility dashboards",
            "Priority support"
        ]
    },

    scale: {
        name: "Scale",
        price: "TBD",
        description: "Advanced operations package for teams requiring full operational intelligence.",
        features: [
            "End-to-end intelligent system build",
            "Advanced automation workflows",
            "Executive reporting suite",
            "Dedicated support channel"
        ]
    }
};

/* ---------------------------------------------------------
   Render a Single Package Card
--------------------------------------------------------- */
function renderPackageCard(pkg) {
    return `
        <div class="package-card">
            <h3>${pkg.name}</h3>
            <div class="package-price">${pkg.price}</div>
            <p class="package-desc">${pkg.description}</p>

            <ul class="package-features">
                ${pkg.features.map(f => `<li>${f}</li>`).join("")}
            </ul>

            <button class="package-cta">Select Package</button>
        </div>
    `;
}

/* ---------------------------------------------------------
   Render All Package Cards Into the UI
--------------------------------------------------------- */
function renderAllPackages() {
    const container = document.getElementById("package-container");
    if (!container) return;

    container.innerHTML = `
        ${renderPackageCard(packageTemplates.starter)}
        ${renderPackageCard(packageTemplates.growth)}
        ${renderPackageCard(packageTemplates.scale)}
    `;
}

/* ---------------------------------------------------------
   Bootstrap Logic
--------------------------------------------------------- */
function initializePackageCards() {
    renderAllPackages();
}

/* Expose initializer */
window.initializePackageCards = initializePackageCards;
