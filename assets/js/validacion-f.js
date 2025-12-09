// validacion-f.js — Validación de formulario

document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = form.querySelector("input[type='text']").value.trim();
        const email = form.querySelector("input[type='email']").value.trim();
        const mensaje = form.querySelector("textarea").value.trim();

        if (nombre === "" || email === "" || mensaje === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }

        if (!email.includes("@")) {
            alert("Por favor ingresa un correo válido.");
            return;
        }

        alert("Mensaje enviado correctamente 🎉");
        form.reset();
    });

});
