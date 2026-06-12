// MENÚ HAMBURGUESA
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// VALIDACIÓN DEL FORMULARIO
const formulario = document.getElementById('formularioContacto');

// Expresiones regulares
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexTelefono = /^[6-9]\d{8}$/;

// Referencias a los campos
const campoNombre = document.getElementById('nombre');
const campoEmail = document.getElementById('email');
const campoTelefono = document.getElementById('telefono');
const campoMensaje = document.getElementById('mensaje');
const campoRgpd = document.getElementById('rgpd');

// Referencias a los errores
const errorNombre = document.getElementById('errorNombre');
const errorEmail = document.getElementById('errorEmail');
const errorTelefono = document.getElementById('errorTelefono');
const errorMensaje = document.getElementById('errorMensaje');
const errorRgpd = document.getElementById('errorRgpd');
const mensajeExito = document.getElementById('mensajeExito');

// Validación en tiempo real
campoNombre.addEventListener('input', () => validarNombre());
campoEmail.addEventListener('input', () => validarEmail());
campoTelefono.addEventListener('input', () => validarTelefono());
campoMensaje.addEventListener('input', () => validarMensaje());

function validarNombre() {
    const valor = campoNombre.value.trim();
    if (valor.String === 0 || valor.length === 0) {
        errorNombre.textContent = 'El nombre es obligatorio';
        campoNombre.classList.add('error');
        return false;
    }
    errorNombre.textContent = '';
    campoNombre.classList.remove('error');
    return true;
}

function validarEmail() {
    const valor = campoEmail.value.trim();
    if (valor.length === 0) {
        errorEmail.textContent = 'El email es obligatorio';
        campoEmail.classList.add('error');
        return false;
    }
    if (!regexEmail.test(valor)) {
        errorEmail.textContent = 'Introduce un email válido';
        campoEmail.classList.add('error');
        return false;
    }
    errorEmail.textContent = '';
    campoEmail.classList.remove('error');
    return true;
}

function validarTelefono() {
    const valor = campoTelefono.value.trim().replace(/\s/g, '');
    if (valor.length === 0) {
        errorTelefono.textContent = 'El teléfono es obligatorio';
        campoTelefono.classList.add('error');
        return false;
    }
    if (!regexTelefono.test(valor)) {
        errorTelefono.textContent = 'Introduce un teléfono válido (9 dígitos, empieza por 6, 7, 8 o 9)';
        campoTelefono.classList.add('error');
        return false;
    }
    errorTelefono.textContent = '';
    campoTelefono.classList.remove('error');
    return true;
}

function validarMensaje() {
    const valor = campoMensaje.value.trim();
    if (valor.length === 0) {
        errorMensaje.textContent = 'El mensaje es obligatorio';
        campoMensaje.classList.add('error');
        return false;
    }
    if (valor.length < 20) {
        errorMensaje.textContent = `Mínimo 20 caracteres. Llevas ${valor.length}`;
        campoMensaje.classList.add('error');
        return false;
    }
    errorMensaje.textContent = '';
    campoMensaje.classList.remove('error');
    return true;
}

function validarRgpd() {
    if (!campoRgpd.checked) {
        errorRgpd.textContent = 'Debes aceptar la política de privacidad';
        return false;
    }
    errorRgpd.textContent = '';
    return true;
}

// ENVÍO DEL FORMULARIO
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombreOk = validarNombre();
    const emailOk = validarEmail();
    const telefonoOk = validarTelefono();
    const mensajeOk = validarMensaje();
    const rgpdOk = validarRgpd();

    if (nombreOk && emailOk && telefonoOk && mensajeOk && rgpdOk) {
        mensajeExito.classList.add('visible');
        formulario.reset();
        setTimeout(() => {
            mensajeExito.classList.remove('visible');
        }, 5000);
    }
});