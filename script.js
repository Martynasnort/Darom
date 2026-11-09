// DAROM Projektai
let clicks = 0;
const footer = document.getElementById("footer");
if (footer) {
    footer.addEventListener("click", () => {
        clicks++;
        if (clicks >= 5) { prompt("Administratoriaus kodas"); clicks = 0; }
    });
}
const btn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
if (btn && menu) {
    const set = open => { menu.classList.toggle("show", open); btn.setAttribute("aria-expanded", open); };
    btn.addEventListener("click", () => set(!menu.classList.contains("show")));
    menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => set(false)));
}
