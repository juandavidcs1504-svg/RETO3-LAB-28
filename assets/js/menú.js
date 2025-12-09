// menù.js — Scroll suave del menú

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const seccion = document.querySelector(this.getAttribute("href"));
        seccion.scrollIntoView({ behavior: "smooth" });
    });
});
