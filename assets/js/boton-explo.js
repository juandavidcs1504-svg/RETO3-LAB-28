// boton-explo.js — Botón Explorar que baja a Tendencias

document.getElementById("btnHero").addEventListener("click", () => {
    const tendencias = document.getElementById("tendencias");
    tendencias.scrollIntoView({ behavior: "smooth" });
});