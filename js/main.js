
const movil = document.getElementById('hamburger');
const menu = document.getElementById('menu');

movil.addEventListener('click', () => {
    menu.classList.toggle('active');
});


const contenedor = document.getElementById('reseñasContenedor');
const puntosContenedor = document.getElementById('puntos');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const tarjetas = Array.from(contenedor.querySelectorAll('.reseñas__tarjeta'));
let slideActual = 0;

function tarjetasPorSlide() {
    return window.innerWidth <= 768 ? 1 : 3;
}

function totalSlides() {
    return Math.ceil(tarjetas.length / tarjetasPorSlide());
}

function crearPuntos() {
    puntosContenedor.innerHTML = '';
    for (let i = 0; i < totalSlides(); i++) {
        const punto = document.createElement('button');
        punto.classList.add('punto');
        if (i === 0) punto.classList.add('activo');
        punto.addEventListener('click', () => {
            irASlide(i);
        });
        puntosContenedor.appendChild(punto);
    }
}

function actualizarSlider() {
    const porSlide = tarjetasPorSlide();
    
    tarjetas.forEach((tarjeta, index) => {
        if (index >= slideActual * porSlide && index < (slideActual + 1) * porSlide) {
            tarjeta.style.display = 'block';
        } else {
            tarjeta.style.display = 'none';
        }
    });

    document.querySelectorAll('.punto').forEach((punto, index) => {
        punto.classList.toggle('activo', index === slideActual);
    });
}

function irASlide(index) {
    slideActual = index;
    actualizarSlider();
}

prevBtn.addEventListener('click', () => {
    if (slideActual > 0) {
        slideActual--;
    } else {
        slideActual = totalSlides() - 1;
    }
    actualizarSlider();
});

nextBtn.addEventListener('click', () => {
    if (slideActual < totalSlides() - 1) {
        slideActual++;
    } else {
        slideActual = 0;
    }
    actualizarSlider();
});

window.addEventListener('resize', () => {
    slideActual = 0;
    crearPuntos();
    actualizarSlider();
});


crearPuntos();
actualizarSlider();