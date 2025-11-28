/* =========================================================
   WEBSITE BLUEPRINT — ROI CALCULATOR
   Neutral, brand-agnostic template for all website builds
   ========================================================= */

/* ---------------------------------------------------------
   DOM Elements
--------------------------------------------------------- */
const roiForm = document.getElementById("roi-form");
const roiOutput = document.getElementById("roi-output");

const inputFields = {
    leads: document.getElementById("input-leads"),
    closeRate: document.getElementById("input-close-rate"),
    dealValue: document.getElementById("input-deal-value"),
    hoursSaved: document.getElementById("input-hours-saved"),
    hourlyCost: document.getElementById("input-hourly-cost"),
};

/* ---------------------------------------------------------
   Helper — Convert percentage string -> decimal
--------------------------------------------------------- */
function pct(value) {
    const n = parseFloat(value);
    if (isNaN(n)) return 0;
    return n / 100;
}

/* ---------------------------------------------------------
   Universal ROI Calculation (Blueprint)
   * This is a placeholder structure *
   * Each brand replaces logic in customization pass *
--------------------------------------------------------- */
function calculateROI(values) {
    const {
        leads,
        closeRate,
        dealValue,
        hoursSaved,
        hourlyCost
    } = values;

    /* ------------------------------
       Revenue Uplift (Neutral Model)
    ------------------------------ */
    const monthlyDeals = leads * pct(closeRate);
    const revenueGain = monthlyDeals * dealValue;

    /* ------------------------------
       Labor Savings (Neutral Model)
    ------------------------------ */
    const costSavings = hoursSaved * hourlyCost;

    /* ------------------------------
       Total Value Created (Neutral)
    ------------------------------ */
    const totalValue = revenueGain + costSavings;

    return {
        revenueGain: Math.round(revenueGain),
        costSavings: Math.round(costSavings),
        totalValue: Math.round(totalValue),
    };
}

/* ---------------------------------------------------------
   Form Handler
--------------------------------------------------------- */
function initializeROICalculator() {
    if (!roiForm) return;

    roiForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Extract values
        const values = {
            leads: parseFloat(inputFields.leads.value) || 0,
            closeRate: parseFloat(inputFields.closeRate.value) || 0,
            dealValue: parseFloat(inputFields.dealValue.value) || 0,
            hoursSaved: parseFloat(inputFields.hoursSaved.value) || 0,
            hourlyCost: parseFloat(inputFields.hourlyCost.value) || 0,
        };

        // Compute ROI
        const result = calculateROI(values);

        // Display result
        if (roiOutput) {
            roiOutput.innerHTML = `
                <div class="roi-result">
                    <h3>Estimated Monthly Value Created</h3>
                    <p><strong>Revenue Generated:</strong> $${result.revenueGain.toLocaleString()}</p>
                    <p><strong>Cost Savings:</strong> $${result.costSavings.toLocaleString()}</p>
                    <hr>
                    <p><strong>Total Estimated Monthly Value:</strong> $${result.totalValue.toLocaleString()}</p>
                </div>
            `;
        }
    });
}

/* ---------------------------------------------------------
   Debug log
--------------------------------------------------------- */
if (window.location.search.includes("debug=true")) {
    console.log("[Blueprint ROI Calculator Loaded]");
}

/* Expose initializer */
window.initializeROICalculator = initializeROICalculator;
