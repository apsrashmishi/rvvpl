/* =====================================================================
   RVVPL SITE DATA — EDIT THIS BLOCK TO UPDATE THE LIVE IMPACT NUMBERS
   ---------------------------------------------------------------------
   These values feed the "Live Impact" panel on the home page and the
   stats row on the EV Charging page. Update monthly. Use plain numbers
   (no commas) — formatting is applied automatically. Use null for any
   metric you don't want to show yet ("—" will be displayed).
   ===================================================================== */
const IMPACT_STATS = {
  chargePoints: 6,
  pipelinePoints: 4,
  sessions: 475,
  kwhDispensed: 14000,
  carbonTonnes: 11000,
  solarKwUnderway: 200,
  updatedLabel: "July 2026"
};
/* ============== end of editable block ============== */

/* Admin overrides: values saved from admin.html (stored in this browser's
   localStorage) take precedence over the defaults above. To make an update
   permanent for ALL visitors, edit the block above (admin.html generates
   the exact code to paste). */
try {
  var __ov = JSON.parse(localStorage.getItem("rvvpl_stats") || "null");
  if (__ov && typeof __ov === "object") { Object.assign(IMPACT_STATS, __ov); }
} catch (e) { /* ignore corrupt overrides */ }

function fmt(v) {
  if (v === null || v === undefined) return "—";
  return Number(v).toLocaleString("en-IN");
}

document.addEventListener("DOMContentLoaded", function () {
  // Inject stats wherever data-stat attributes appear
  document.querySelectorAll("[data-stat]").forEach(function (el) {
    var key = el.getAttribute("data-stat");
    if (key === "updatedLabel") { el.textContent = IMPACT_STATS.updatedLabel; return; }
    el.textContent = fmt(IMPACT_STATS[key]);
  });

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
});
