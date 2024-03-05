const hamburguesa = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const enlaces = document.querySelectorAll('.navegacion a');
document.addEventListener('DOMContentLoaded', () => {
    mostrarMenu();
    cerrarMenu();
});

function mostrarMenu() {
    hamburguesa.addEventListener('click', () => {
        navegacion.classList.toggle('ocultar');

    });
}

function cerrarMenu() {
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault();
            const href = e.target.getAttribute('href');
            if (href.startsWith('#')) {
                const seccion = document.querySelector(href);
                cambioSeccion(seccion);
            } else {
                window.location.href = href; // Navegar a la página indicada en el href
            }
            if (e.target.tagName === 'A') {
                navegacion.classList.add('ocultar');
            }
        });
    });
}


function cambioSeccion(seccion) {
    seccion.scrollIntoView({
        behavior: 'smooth'
    })
}

