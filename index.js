document.addEventListener('DOMContentLoaded', function () {
    let modoBoton = document.getElementById('modoBoton');

    modoBoton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        actualizarTextoBoton();
    });

    function actualizarTextoBoton() {
        let modoActual = document.body.classList.contains('dark-mode') ? 'Modo Oscuro' : 'Modo Claro';
        modoBoton.textContent = modoActual;
    }
});