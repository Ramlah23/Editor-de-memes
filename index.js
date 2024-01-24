let modoBoton = document.getElementById('modoBoton');
let bodyElement = document.body;

modoBoton.addEventListener('click', function () {
    bodyElement.classList.toggle('dark-mode');
    let modoActual = bodyElement.classList.contains('dark-mode') ? 'Modo Oscuro' : 'Modo Claro';
    modoBoton.textContent = modoActual;
});

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
    });

// ACA ESTA EL PASO a PASO PARA PODER AGREGAR LA IMAGEN EN EL CONTENEDOR//

document.addEventListener('DOMContentLoaded', function () {
    const urlImgInput = document.getElementById('url-img-input');
    const imageMeme = document.getElementById('image-meme');
    
    // Función para cargar la imagen desde la URL
    const cargarImagenDesdeURL = function () {
    const url = urlImgInput.value.trim();
    
    if (url !== '') {
    imageMeme.style.backgroundImage = `url('${url}')`;
    }
    };
    
  // Evento al enviar el formulario de imagen
    const imagenMenuForm = document.getElementById('imagen-menu');
    imagenMenuForm.addEventListener('submit', function (event) {
    event.preventDefault();
    cargarImagenDesdeURL();
    });
});

//ACA APLICARIA LOS COLORES FONDO Y FILTROS

document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.getElementById("image-meme");
    const blendModeBgc = document.getElementById("blend-mode-bgc");
    const blendModeSelect = document.getElementById("blend-mode-select");
    const brightnessSlider = document.getElementById("brightness-slider");
    const opacitySlider = document.getElementById("opacity-slider");
    const contrastSlider = document.getElementById("contrast-slider");
    const blurSlider = document.getElementById("blur-slider");
    const grayscaleSlider = document.getElementById("grayscale-slider");
    const sepiaSlider = document.getElementById("sepia-slider");
    const hueSlider = document.getElementById("hue-slider");
    const saturateSlider = document.getElementById("saturate-slider");
    const invertSlider = document.getElementById("invert-slider");
    const restablecerFiltrosButton = document.getElementById("restablecer-filtros");

    // Agrega un listener al botón "Restablecer Filtros"
    restablecerFiltrosButton.addEventListener("click", restablecerFiltros);

    function restablecerFiltros() {
        // Restablece los valores de los sliders y el modo de mezcla a sus valores iniciales
        brightnessSlider.value = 1;
        opacitySlider.value = 1;
        contrastSlider.value = 100;
        blurSlider.value = 0;
        grayscaleSlider.value = 0;
        sepiaSlider.value = 0;
        hueSlider.value = 0;
        saturateSlider.value = 100;
        invertSlider.value = 0;

        blendModeBgc.value = "#FFFFFF";
        blendModeSelect.value = "unset";

        // Aplica los filtros y el modo de mezcla al contenedor de imagen
        aplicarFiltrosYModoMezcla();
    }

    // Agrega listeners a los sliders de filtros
    brightnessSlider.addEventListener("input", aplicarFiltrosYModoMezcla);
    opacitySlider.addEventListener("input", aplicarFiltrosYModoMezcla);
    contrastSlider.addEventListener("input", aplicarFiltrosYModoMezcla);
    blurSlider.addEventListener("input", aplicarFiltrosYModoMezcla);
    grayscaleSlider.addEventListener("input", aplicarFiltrosYModoMezcla);
    sepiaSlider.addEventListener("input", aplicarFiltrosYModoMezcla);
    hueSlider.addEventListener("input", aplicarFiltrosYModoMezcla);
    saturateSlider.addEventListener("input", aplicarFiltrosYModoMezcla);
    invertSlider.addEventListener("input", aplicarFiltrosYModoMezcla);

    // Agrega listeners al selector de color de fondo y al modo de mezcla
    blendModeBgc.addEventListener("input", aplicarFiltrosYModoMezcla);
    blendModeSelect.addEventListener("input", aplicarFiltrosYModoMezcla);

    function aplicarFiltrosYModoMezcla() {
        // Obtiene los valores de los sliders y el modo de mezcla
        const brightnessValue = brightnessSlider.value;
        const opacityValue = opacitySlider.value;
        const contrastValue = contrastSlider.value;
        const blurValue = blurSlider.value;
        const grayscaleValue = grayscaleSlider.value;
        const sepiaValue = sepiaSlider.value;
        const hueValue = hueSlider.value;
        const saturateValue = saturateSlider.value;
        const invertValue = invertSlider.value;
        const blendModeBgcValue = blendModeBgc.value;
        const blendModeSelectValue = blendModeSelect.value;

        // Aplica los filtros y el modo de mezcla al contenedor de imagen
        imageContainer.style.filter = `brightness(${brightnessValue}) opacity(${opacityValue}) contrast(${contrastValue}%) blur(${blurValue}px) grayscale(${grayscaleValue}%) sepia(${sepiaValue}%) hue-rotate(${hueValue}deg) saturate(${saturateValue}%) invert(${invertValue})`;
        imageContainer.style.backgroundColor = blendModeBgcValue;
        imageContainer.style.mixBlendMode = blendModeSelectValue;
    }
});

//DESCARGAR MEME//


//**NO PUEDE HACERLO  =(


//OCULTADO DE PANEL

//Obtén referencia al botón y al panel que deseas ocultar
const botonCerrarPanel = document.getElementById('ocultarColumnaButton');
const panel = document.getElementById('panel'); // Reemplaza 'nombreDeTuPanel' con el ID real de tu panel

// Agrega un manejador de eventos clic al botón
botonCerrarPanel.addEventListener('click', () => {
    // Oculta el panel o realiza las acciones necesarias
    panel.style.display = 'none'; // Puedes ajustar esto según cómo estés mostrando/ocultando tu panel

    // Otras acciones que desees realizar al cerrar el panel
});




   