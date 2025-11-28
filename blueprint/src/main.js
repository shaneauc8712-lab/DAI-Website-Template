/* =========================================================
   WEBSITE BLUEPRINT — MAIN JS
   Neutral, reusable logic for all brand implementations
   ========================================================= */

/* -------------------------
   Smooth Scroll (Global)
-------------------------- */
document.querySelectorAll('[data-scroll]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('data-scroll'));
        if (!target) return;

        window.scrollTo({
            top: target.offsetTop - 20,
            behavior: 'smooth',
        });
    });
});

/* -------------------------
   Mobile Menu Toggle (if applicable)
-------------------------- */
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("open");
    });
}

/* -------------------------
   ROI Calculator Bootstrap
   (Delegates logic to roi-calculator.js)
-------------------------- */
if (typeof initializeROICalculator === "function") {
    initializeROICalculator();
}

/* -------------------------
   Tier Logic Bootstrap
   (Delegates logic to tierLogic.js)
-------------------------- */
if (typeof initializeTierLogic === "function") {
    initializeTierLogic();
}

/* -------------------------
   Package Card Hover Effects
-------------------------- */
document.querySelectorAll(".package-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.classList.add("active");
    });

    card.addEventListener("mouseleave", () => {
        card.classList.remove("active");
    });
});

/* -------------------------
   Universal Event Logger (Debug Mode)
-------------------------- */
function debugLog(message) {
    if (window.location.search.includes("debug=true")) {
        console.log("[Blueprint Debug]:", message);
    }
}

debugLog("Blueprint main.js initialized.");
