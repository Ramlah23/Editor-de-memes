let miBoton = document.getElementById('miBoton');
    let body = document.body;

    function toggleModo() {
        body.classList.toggle('modo-claro');
        body.classList.toggle('modo-oscuro');

        // Cambiar el texto del botón
        if (body.classList.contains('modo-claro')) {
            miBoton.textContent = 'Modo Claro';
        } else {
            miBoton.textContent = 'Modo Oscuro';
        }
    }

    // Agregar evento al botón
    miBoton.addEventListener('click', toggleModo);

    // Agregar evento al body
    body.addEventListener('click', toggleModo);
