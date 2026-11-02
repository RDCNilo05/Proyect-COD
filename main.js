const toggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    if (themeIcon) {
        themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
    }
}

if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        if (body.classList.contains('light-mode')) {
            themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
            localStorage.setItem('theme', 'light');
        } else {
            themeIcon.classList.replace('bi-sun-fill', 'bi-moon-fill');
            localStorage.setItem('theme', 'dark');
        }
    });
}

function mostrarAlertaNoticia() {
    alert("¡Alerta de Inteligencia!\nEl artículo completo se desbloqueará en la próxima actualización de temporada.");
}

function confirmarSuscripcion() {
    let confirmacion = confirm("¿Estás seguro de que quieres unirte a la red de inteligencia y recibir alertas de los nuevos parches?");
    
    if (confirmacion) {
        let nombre = prompt("¡Excelente! Ingresa tu Gamertag (nombre de jugador):", "Operador");
        
        if (nombre === null || nombre.trim() === "") {
            alert("Operación cancelada. Necesitamos un Gamertag válido para registrarte en la base de datos.");
        } else {
            alert(`¡Operación exitosa, ${nombre}! Bienvenido al escuadrón. Mantente atento a tus comunicaciones.`);
        }
    } else {
        alert("Suscripción abortada. Regresando a la base.");
    }
}