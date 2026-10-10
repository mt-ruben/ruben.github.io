"use strict";

// Menú de navegación para dispositivos móviles
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("#nav-menu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("is-open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Cerrar menú" : "Abrir menú"
        );
        menuToggle.textContent = isOpen ? "Cerrar" : "Menú";
    });

    // Cerrar el menú después de seleccionar una sección
    navMenu.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menú");
            menuToggle.textContent = "Menú";
        });
    });
}

// Año automático del pie de página
const currentYear = document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}