// Archivo principal que conecta todos los módulos JS

// Importación de funcionalidades
import { scrollSuave } from "./scroll.js";
import { galeriaZoom } from "./galeria.js";
import { validarFormulario } from "./form.js";
import { heroAccion } from "./hero.js";

// Inicializar funciones cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    scrollSuave();
    galeriaZoom();
    validarFormulario();
    heroAccion();
});
