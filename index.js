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

// //cuando todo el boton desaparece el panel
// document.addEventListener('DOMContentLoaded', function () {
//     let ocultarColumnaButton = document.getElementById('ocultarColumnaButton');
//     let panel = document.getElementById('panel');

//     ocultarColumnaButton.addEventListener('click', function () {
//         // Ocultar el aside al hacer clic en el botón
//         panel.style.display = 'none';
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    const panelImg = document.getElementById('panel-img');
    const panelText = document.getElementById('panel-text');
    const panelImgButton = document.getElementById('panel-img-boton');
    const panelTextButton = document.getElementById('panel-text-boton');
    const ocultarColumnaButton = document.getElementById('ocultarColumnaButton');

    // Mostrar el panel de imagen y ocultar el panel de texto
    panelImgButton.addEventListener('click', function () {
      panelImg.classList.remove('oculto');
      panelText.classList.add('oculto');
    });

    // Mostrar el panel de texto y ocultar el panel de imagen
    panelTextButton.addEventListener('click', function () {
      panelText.classList.remove('oculto');
      panelImg.classList.add('oculto');
    });

    // Ocultar ambos paneles cuando se hace clic en el botón de cerrar
    ocultarColumnaButton.addEventListener('click', function () {
      panelImg.classList.add('oculto');
      panelText.classList.add('oculto');
    });
  });

