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

//OCULTADO DE PANEL

//Obtén referencia al botón y al panel que deseas ocultar
const botonCerrarPanel = document.getElementById('ocultarColumnaButton');
const panel = document.getElementById('panel'); 

botonCerrarPanel.addEventListener('click', () => {
    
    panel.style.display = 'none'; 

});

//-------------IMAGEN---------------------
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

   
    restablecerFiltrosButton.addEventListener("click", restablecerFiltros);

    function restablecerFiltros() {
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

    
    blendModeBgc.addEventListener("input", aplicarFiltrosYModoMezcla);
    blendModeSelect.addEventListener("input", aplicarFiltrosYModoMezcla);

    function aplicarFiltrosYModoMezcla() {
        
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

        
        imageContainer.style.filter = `brightness(${brightnessValue}) opacity(${opacityValue}) contrast(${contrastValue}%) blur(${blurValue}px) grayscale(${grayscaleValue}%) sepia(${sepiaValue}%) hue-rotate(${hueValue}deg) saturate(${saturateValue}%) invert(${invertValue})`;
        imageContainer.style.backgroundColor = blendModeBgcValue;
        imageContainer.style.mixBlendMode = blendModeSelectValue;
    }
});

//DESCARGAR MEME//

const $ = (id) => document.getElementById(id);
const descargarMeme = () => {
    domtoimage.toBlob($('contenedor-meme')).then(function (blob) {
        saveAs(blob, 'mi-meme.png');
    });
}
// Agrega un evento de clic al botón de descarga
$('descargar-meme-boton').addEventListener('click', descargarMeme);



//------------------TEXTO ------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const nombreTextArea = document.getElementById('nombre');
    const bottomTextArea = document.getElementById('bottom-text-input');
    const textoSuperior = document.querySelector('.contenedor-secundario .subtitulo:first-child');
    const textoInferior = document.querySelector('.contenedor-secundario .subtitulo:last-child');
  
    // Función para actualizar el contenido de las secciones de texto
    function actualizarTexto() {
      textoSuperior.textContent = nombreTextArea.value;
      textoInferior.textContent = bottomTextArea.value;
    }
   
    nombreTextArea.addEventListener('input', actualizarTexto);
  
    bottomTextArea.addEventListener('input', actualizarTexto);
  
    // Función para actualizar el estilo de las secciones de texto
    function actualizarEstilo() {
      const textContainer = document.querySelector('.contenedor-secundario');
  
      // Estilo de fuente
      textContainer.style.fontFamily = document.getElementById('text-fuente-family').value;
  
      // Tamaño de fuente
      textContainer.style.fontSize = document.getElementById('texto-tamaño').value + 'px';
  
      // Alineación de texto
      const alineacion = document.querySelector('input[name="alineacion"]:checked').value;
      textContainer.style.textAlign = alineacion;
  
      // Color de texto
      const colorTexto = document.getElementById('text-color-input').value;
      textContainer.style.color = colorTexto;
  
      // Color de fondo
      const colorFondo = document.getElementById('color-de-texto').value;
      textContainer.style.backgroundColor = colorFondo;
  
      // Fondo transparente
      const fondoTransparente = document.getElementById('text-no-background-checkbox').checked;
      textContainer.style.backgroundColor = fondoTransparente ? 'transparent' : colorFondo;
  
      // Contorno
      const contorno = document.querySelector('input[name="contorno"]:checked').value;
      textContainer.style.textShadow = contorno;
  
      // Espaciado
      const espaciado = document.getElementById('contenido').value + 'px';
      textContainer.style.padding = `0 ${espaciado}`;
  
      // Interlineado
      const interlineado = document.getElementById('seleccion-de-lineado').value;
      textContainer.style.lineHeight = interlineado;
    }
  
    // Escucha cambios en los elementos de estilo
    const elementosEstilo = document.querySelectorAll('.contenedor-de-texto, .contenedor-de-texto2, .contenedor-de-texto3, .contenedor-de-texto4, .contenedor-de-texto5, #text-no-background-checkbox');
    elementosEstilo.forEach(function (elemento) {
      elemento.addEventListener('input', actualizarEstilo);
    });
  
    actualizarEstilo();
  });




   