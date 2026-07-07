// =========================
// DAROM Projektai
// script.js
// =========================

// Admin paspaudimų skaičius
let clicks = 0;

// Footer administratoriaus zona
const footer = document.getElementById("footer");

if (footer) {
    footer.addEventListener("click", () => {
        clicks++;

        if (clicks >= 5) {
            prompt("Administratoriaus kodas");
            clicks = 0;
        }
    });
}

// Mobilus meniu
function toggleMenu() {
    const menu = document.getElementById("menu");

    if (menu) {
        menu.classList.toggle("show");
    }
}

// Uždaro meniu paspaudus nuorodą
document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        const menu = document.getElementById("menu");

        if (menu) {
            menu.classList.remove("show");
        }
    });
});
