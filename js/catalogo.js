const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

const cursos = [
    { codigo: 'ADGD250PO', nombre: 'Sistema de I+d+i y gestión de la innovación', categoria: 'Gestión', horas: '75H', modalidad: 'On Line', precio: '150€', descripcion: 'Curso orientado a la gestión de proyectos de innovación empresarial.', objetivos: 'Conocer los sistemas de I+D+i y aplicarlos en entornos empresariales.' },
    { codigo: 'ADGD211PO', nombre: 'Posicionamiento en buscadores', categoria: 'Marketing', horas: '50H', modalidad: 'On Line', precio: '100€', descripcion: 'Aprende las técnicas de SEO para posicionar tu web en los primeros resultados.', objetivos: 'Dominar las principales técnicas de posicionamiento orgánico en buscadores.' },
    { codigo: 'COMM049PO', nombre: 'Técnicas de marketing online, buscadores, social media y móvil', categoria: 'Marketing', horas: '90H', modalidad: 'On Line', precio: '180€', descripcion: 'Curso completo de marketing digital enfocado en redes sociales y SEO.', objetivos: 'Aplicar estrategias de marketing digital en entornos online.' },
    { codigo: 'IFCD023PO', nombre: 'Experto web y multimedia para e-commerce II', categoria: 'Informática', horas: '90H', modalidad: 'On Line', precio: '180€', descripcion: 'Formación avanzada en desarrollo web y multimedia para comercio electrónico.', objetivos: 'Desarrollar soluciones web avanzadas para e-commerce.' },
    { codigo: 'COMM040PO', nombre: 'Gestión del marketing 2.0', categoria: 'Marketing', horas: '90H', modalidad: 'On Line', precio: '180€', descripcion: 'Curso sobre estrategias de marketing digital y gestión de marca online.', objetivos: 'Gestionar campañas de marketing digital de forma efectiva.' },
    { codigo: 'ADGD127PO', nombre: 'Gestión de proyectos sociales', categoria: 'Gestión', horas: '110H', modalidad: 'On Line', precio: '200€', descripcion: 'Formación en gestión y coordinación de proyectos de carácter social.', objetivos: 'Planificar y ejecutar proyectos sociales de manera eficiente.' },
    { codigo: 'ADGD124PO', nombre: 'Gestión de los negocios online 2.0', categoria: 'Gestión', horas: '210H', modalidad: 'On Line', precio: '250€', descripcion: 'Curso completo sobre gestión empresarial en entornos digitales.', objetivos: 'Gestionar negocios online aplicando estrategias digitales actuales.' },
    { codigo: 'ADGD079PO', nombre: 'Diseño y evaluación de proyectos sociales', categoria: 'Gestión', horas: '45H', modalidad: 'On Line', precio: '90€', descripcion: 'Formación en diseño y evaluación de proyectos de impacto social.', objetivos: 'Diseñar y evaluar proyectos sociales con criterios profesionales.' },
    { codigo: 'HOTR0026', nombre: 'El servicio de comidas en centros sanitarios y sociosanitarios', categoria: 'Sanidad', horas: '100H', modalidad: 'On Line', precio: '180€', descripcion: 'Curso especializado en servicios de alimentación en entornos sanitarios.', objetivos: 'Gestionar el servicio de comidas en centros sanitarios con calidad.' },
    { codigo: 'IFCT101PO', nombre: 'Planificación de la seguridad informática en la empresa', categoria: 'Informática', horas: '80H', modalidad: 'On Line', precio: '160€', descripcion: 'Formación en seguridad informática y protección de datos empresariales.', objetivos: 'Planificar e implementar medidas de seguridad informática en empresas.' },
    { codigo: 'IFCD47', nombre: 'Programación con SQL y Bases de Datos relacionales', categoria: 'Informática', horas: '200H', modalidad: 'On Line', precio: '250€', descripcion: 'Curso de programación y gestión de bases de datos con SQL.', objetivos: 'Dominar SQL y el diseño de bases de datos relacionales.' },
    { codigo: 'IFCT78', nombre: 'Administración de Sistemas Linux', categoria: 'Informática', horas: '200H', modalidad: 'On Line', precio: '250€', descripcion: 'Formación completa en administración de sistemas operativos Linux.', objetivos: 'Administrar sistemas Linux en entornos profesionales.' },
    { codigo: 'ARGN02', nombre: 'Edición de revistas digitales y ebooks', categoria: 'Diseño', horas: '300H', modalidad: 'On Line', precio: '300€', descripcion: 'Curso de diseño y edición de publicaciones digitales.', objetivos: 'Crear y editar revistas digitales y ebooks con herramientas profesionales.' },
    { codigo: 'ARGG028PO', nombre: 'Modelo poligonal con 3D Studio Max para entornos virtuales', categoria: 'Diseño', horas: '210H', modalidad: 'On Line', precio: '250€', descripcion: 'Formación en modelado 3D con 3D Studio Max para entornos virtuales.', objetivos: 'Crear modelos 3D profesionales para entornos virtuales.' },
    { codigo: 'IFCD088PO', nombre: 'Visión artificial y su aplicación en la industria 4.0', categoria: 'Informática', horas: '150H', modalidad: 'On Line', precio: '220€', descripcion: 'Curso sobre visión artificial y su aplicación en procesos industriales.', objetivos: 'Aplicar técnicas de visión artificial en entornos industriales.' },
    { codigo: 'IFCD098PO', nombre: 'Desarrollo de software especializado en servicios de usuario y cliente', categoria: 'Informática', horas: '160H', modalidad: 'On Line', precio: '230€', descripcion: 'Formación en desarrollo de software orientado al cliente.', objetivos: 'Desarrollar software especializado en servicios al usuario.' },
    { codigo: 'IFCD46', nombre: 'Desarrollo web con ASP.Net y C#', categoria: 'Informática', horas: '250H', modalidad: 'On Line', precio: '280€', descripcion: 'Curso completo de desarrollo web con tecnologías Microsoft.', objetivos: 'Desarrollar aplicaciones web con ASP.Net y C#.' },
    { codigo: 'SSCE0110', nombre: 'Docencia de la Formación Profesional para el Empleo', categoria: 'Formación', horas: '480H', modalidad: 'On Line', precio: '300€', descripcion: 'Certificado de profesionalidad completo para docentes de FP.', objetivos: 'Capacitar para la docencia en formación profesional para el empleo.' },
    { codigo: 'SSCS0208', nombre: 'Atención sociosanitaria a personas dependientes en instituciones sociales', categoria: 'Sanidad', horas: '--H', modalidad: 'On Line', precio: '200€', descripcion: 'Certificado de profesionalidad en atención sociosanitaria.', objetivos: 'Atender a personas dependientes en instituciones sociales.' },
    { codigo: 'SSCG0111', nombre: 'Gestión de llamadas de teleasistencia', categoria: 'Servicios', horas: '--H', modalidad: 'On Line', precio: '150€', descripcion: 'Formación en gestión de servicios de teleasistencia.', objetivos: 'Gestionar llamadas y servicios de teleasistencia de forma profesional.' },
    { codigo: 'ADGG0408', nombre: 'Operaciones auxiliares de servicios administrativos y generales', categoria: 'Gestión', horas: '--H', modalidad: 'On Line', precio: '120€', descripcion: 'Certificado de profesionalidad en servicios administrativos.', objetivos: 'Realizar operaciones auxiliares de servicios administrativos.' },
    { codigo: 'SSCB012PO', nombre: 'Monitor de tiempo libre', categoria: 'Servicios', horas: '60H', modalidad: 'On Line', precio: '120€', descripcion: 'Formación para monitores de actividades de tiempo libre.', objetivos: 'Organizar y dirigir actividades de tiempo libre de forma segura.' },
    { codigo: 'ADGG020PO', nombre: 'Excel Avanzado', categoria: 'Informática', horas: '20H', modalidad: 'On Line', precio: '50€', descripcion: 'Curso de Excel avanzado para entornos profesionales.', objetivos: 'Dominar las funciones avanzadas de Excel para el trabajo diario.' },
    { codigo: 'IFCD0110', nombre: 'Confección y Publicación de Páginas Web', categoria: 'Informática', horas: '--H', modalidad: 'On Line', precio: '180€', descripcion: 'Certificado de profesionalidad en desarrollo web.', objetivos: 'Diseñar y publicar páginas web con estándares profesionales.' },
    { codigo: 'IMSV13', nombre: 'Rigging de personajes 3D para producciones audiovisuales y videojuegos', categoria: 'Diseño', horas: '200H', modalidad: 'On Line', precio: '250€', descripcion: 'Curso especializado en rigging de personajes 3D.', objetivos: 'Crear rigs profesionales para personajes 3D en producciones audiovisuales.' },
    { codigo: 'ADGG053PO', nombre: 'Ofimática', categoria: 'Informática', horas: '100H', modalidad: 'On Line', precio: '150€', descripcion: 'Formación completa en herramientas ofimáticas profesionales.', objetivos: 'Manejar con soltura las principales herramientas ofimáticas.' },
    { codigo: 'SANP020PO', nombre: 'Nutrición y Dietética', categoria: 'Sanidad', horas: '110H', modalidad: 'On Line', precio: '180€', descripcion: 'Curso de nutrición y dietética para profesionales de la salud.', objetivos: 'Aplicar conocimientos de nutrición y dietética en entornos profesionales.' },
    { codigo: 'IFCD004PO', nombre: 'Análisis y Programación en JAVA', categoria: 'Informática', horas: '140H', modalidad: 'On Line', precio: '210€', descripcion: 'Curso de programación orientada a objetos con Java.', objetivos: 'Desarrollar aplicaciones en Java aplicando buenas prácticas de programación.' },
    { codigo: 'IFCD003PO', nombre: 'Analista Programador COBOL', categoria: 'Informática', horas: '210H', modalidad: 'On Line', precio: '250€', descripcion: 'Formación en programación COBOL para entornos empresariales.', objetivos: 'Programar en COBOL para sistemas empresariales legacy.' },
    { codigo: 'ADGG021PO', nombre: 'Fundamentos Excel', categoria: 'Informática', horas: '20H', modalidad: 'On Line', precio: '50€', descripcion: 'Curso de iniciación a Excel para usuarios sin conocimientos previos.', objetivos: 'Aprender los fundamentos de Excel para el trabajo cotidiano.' },
    { codigo: 'SSCE22', nombre: 'Tutorización en Teleformación', categoria: 'Formación', horas: '50H', modalidad: 'On Line', precio: '100€', descripcion: 'Formación para tutores de cursos online y plataformas e-learning.', objetivos: 'Tutorizar cursos online con metodologías pedagógicas actuales.' }
];

const cursosGrid = document.getElementById('cursosGrid');
const paginacionEl = document.getElementById('paginacion');
const inputBuscar = document.getElementById('inputBuscar');
const modal = document.getElementById('modal');
const modalOverlay = document.getElementById('modalOverlay');
const modalCerrar = document.getElementById('modalCerrar');

const CURSOS_POR_PAGINA = 9;
let paginaActual = 1;
let categoriaActual = 'todos';
let ordenActual = '';
let cursosFiltrados = [...cursos];

document.querySelectorAll('.filtros__btn[data-categoria]').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filtros__btn[data-categoria]').forEach(b => b.classList.remove('activo'));
        btn.classList.add('activo');
        categoriaActual = btn.dataset.categoria;
        paginaActual = 1;
        aplicarFiltros();
    });
});

document.querySelectorAll('.filtros__btn[data-orden]').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filtros__btn[data-orden]').forEach(b => b.classList.remove('activo'));
        btn.classList.add('activo');
        ordenActual = btn.dataset.orden;
        aplicarFiltros();
    });
});

inputBuscar.addEventListener('input', () => {
    paginaActual = 1;
    aplicarFiltros();
});

function aplicarFiltros() {
    const textoBusqueda = inputBuscar.value.toLowerCase().trim();

    cursosFiltrados = cursos.filter(curso => {
        const coincideCategoria = categoriaActual === 'todos' || curso.categoria === categoriaActual;
        const coincideBusqueda = curso.nombre.toLowerCase().includes(textoBusqueda) || curso.codigo.toLowerCase().includes(textoBusqueda);
        return coincideCategoria && coincideBusqueda;
    });

    if (ordenActual === 'nombre') {
        cursosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else if (ordenActual === 'horas') {
        cursosFiltrados.sort((a, b) => parseInt(a.horas) - parseInt(b.horas));
    } else if (ordenActual === 'precio') {
        cursosFiltrados.sort((a, b) => parseInt(a.precio) - parseInt(b.precio));
    }

    renderizarCursos();
    renderizarPaginacion();
}

function renderizarCursos() {
    cursosGrid.innerHTML = '';
    const inicio = (paginaActual - 1) * CURSOS_POR_PAGINA;
    const fin = inicio + CURSOS_POR_PAGINA;
    const cursosAPagina = cursosFiltrados.slice(inicio, fin);

    if (cursosAPagina.length === 0) {
        const mensaje = document.createElement('p');
        mensaje.textContent = 'No se encontraron cursos.';
        mensaje.style.gridColumn = '1 / -1';
        mensaje.style.textAlign = 'center';
        mensaje.style.padding = '40px';
        cursosGrid.appendChild(mensaje);
        return;
    }

    cursosAPagina.forEach(curso => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('curso__tarjeta');

        const categoria = document.createElement('span');
        categoria.classList.add('curso__categoria');
        categoria.textContent = curso.categoria;

        const nombre = document.createElement('h3');
        nombre.classList.add('curso__nombre');
        nombre.textContent = curso.nombre;

        const horas = document.createElement('p');
        horas.classList.add('curso__horas');
        horas.textContent = `Duración: ${curso.horas}`;

        const precio = document.createElement('p');
        precio.classList.add('curso__precio');
        precio.textContent = curso.precio;

        const btn = document.createElement('button');
        btn.classList.add('curso__btn');
        btn.textContent = 'Ver más';
        btn.addEventListener('click', () => abrirModal(curso));

        tarjeta.appendChild(categoria);
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(horas);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(btn);

        cursosGrid.appendChild(tarjeta);
    });
}

function renderizarPaginacion() {
    paginacionEl.innerHTML = '';
    const totalPaginas = Math.ceil(cursosFiltrados.length / CURSOS_POR_PAGINA);

    for (let i = 1; i <= totalPaginas; i++) {
        const btn = document.createElement('button');
        btn.classList.add('paginacion__btn');
        if (i === paginaActual) btn.classList.add('activo');
        btn.textContent = i;
        btn.addEventListener('click', () => {
            paginaActual = i;
            renderizarCursos();
            renderizarPaginacion();
            window.scrollTo(0, 0);
        });
        paginacionEl.appendChild(btn);
    }
}

function abrirModal(curso) {
    document.getElementById('modalTitulo').textContent = curso.nombre;
    document.getElementById('modalCodigo').textContent = curso.codigo;
    document.getElementById('modalCategoria').textContent = curso.categoria;
    document.getElementById('modalHoras').textContent = curso.horas;
    document.getElementById('modalModalidad').textContent = curso.modalidad;
    document.getElementById('modalPrecio').textContent = curso.precio;
    document.getElementById('modalDescripcion').textContent = curso.descripcion;
    document.getElementById('modalObjetivos').textContent = curso.objetivos;
    modal.classList.add('activo');
    modalOverlay.classList.add('activo');
}

function cerrarModal() {
    modal.classList.remove('activo');
    modalOverlay.classList.remove('activo');
}

modalCerrar.addEventListener('click', cerrarModal);
modalOverlay.addEventListener('click', cerrarModal);

aplicarFiltros();