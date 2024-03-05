var cursos = [
    {
        titulo: 'Diabetes Tipo 1: Fundamentos',
        descripcion: 'Este curso aborda los conceptos básicos de la Diabetes Tipo 1, incluyendo la fisiopatología, tratamiento y recomendaciones de estilo de vida.'
    },
    {
        titulo: 'Diabetes Tipo 2: Gestión',
        descripcion: 'Descubre estrategias efectivas para gestionar la Diabetes Tipo 2, incluyendo consejos nutricionales, manejo de medicamentos y actividades físicas recomendadas.'
    },
    {
        titulo: 'Nutrición y Carbohidratos',
        descripcion: 'Aprende sobre la nutrición específica para personas con diabetes, cómo contar carbohidratos y planificar comidas saludables.'
    },
    {
        titulo: 'Uso del Glucagón',
        descripcion: 'Este curso se centra en el uso y administración del glucagón, un aspecto clave en el manejo de situaciones de hipoglucemia severa.'
    },
    {
        titulo: 'Tecnología: CGM y Asa Cerrado',
        descripcion: 'Explora la tecnología moderna para el monitoreo continuo de glucosa (CGM) y sistemas de lazo cerrado (Asa Cerrado) para el control avanzado de la diabetes.'
    },
    {
        titulo: 'Índice Glucémico y Alimentación',
        descripcion: 'Comprende cómo los alimentos afectan el nivel de glucosa en sangre, el índice glucémico y estrategias de alimentación para el control glucémico.'
    },
    {
        titulo: 'Herramientas para el Autocuidado',
        descripcion: 'Descubre diversas herramientas y técnicas que pueden ayudarte en el autocuidado diario, desde aplicaciones hasta seguimiento de datos y más.'
    },
    {
        titulo: 'Prevención de Complicaciones',
        descripcion: 'Aprende estrategias para prevenir y controlar las posibles complicaciones asociadas con la diabetes, desde cuidados de los pies hasta la salud ocular.'
    }
];

function mostrarCursos(cursosMostrados) {
    var listaCursos = document.getElementById('lista-cursos');
    listaCursos.innerHTML = '';

    cursosMostrados.forEach((curso, index) => {
        var cursoHTML = `<div class="curso">
    <h3>${curso.titulo}</h3>
    <p>${curso.descripcion}</p>
    <a href="./cursos/curso${index + 1}.html">Detalles del Curso</a>
</div>`;
        listaCursos.innerHTML += cursoHTML;
    });
}

function filtrarCursos() {
    var textoBusqueda = document.getElementById('busqueda').value.toLowerCase();

    if (textoBusqueda === '') {
        mostrarCursos(cursos);
    } else {
        var cursosFiltrados = cursos.filter(curso =>
            curso.titulo.toLowerCase().includes(textoBusqueda) ||
            curso.descripcion.toLowerCase().includes(textoBusqueda)
        );
        mostrarCursos(cursosFiltrados);
    }
}

// Muestra todos los cursos al cargar la página
window.onload = function () {
    mostrarCursos(cursos);
};

// Encuentra el input de búsqueda por su ID
var inputBusqueda = document.getElementById('busqueda');

// Agrega un event listener para 'input' (cuando se ingresa texto)
inputBusqueda.addEventListener('input', function () {
    filtrarCursos();
});