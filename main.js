const toggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
}

if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.replace('bi-sun-fill', 'bi-moon-fill');
            localStorage.setItem('theme', 'light');
        }
    });
}

function mostrarAlertaNoticia() {
    alert("¡Alerta de Inteligencia!\nEl artículo completo se desbloqueará en la próxima temporada.");
}

function confirmarSuscripcion() {
    let confirmacion = confirm("¿Estás seguro de que quieres recibir notificaciones de cada parche de actualización?");
    
    if (confirmacion) {
        let nombre = prompt("Ingresa tu gamertag (nombre de jugador):");
        if (nombre) {
            alert(`¡Operación exitosa, ${nombre}! Bienvenido al escuadrón.`);
        } else {
            alert("Operación cancelada. No ingresaste un nombre.");
        }
    } else {
        alert("Suscripción abortada. Regresando a la base.");
    }
}