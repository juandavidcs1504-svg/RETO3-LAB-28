// zoom.js — Efecto de zoom en la galería

document.querySelectorAll(".galeria .grid img").forEach(img => {
    img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.2)";
        img.style.transition = "0.3s";
    });

    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
    });
});
