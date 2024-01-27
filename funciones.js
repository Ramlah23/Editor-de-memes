//*COMIENZO DE FUNCIONALIDAD*//

// Declaración de variables globales

let modoBoton = document.getElementById('modoBoton');
let bodyElement = document.body;

modoBoton.addEventListener('click', function () {
    bodyElement.classList.toggle('dark-mode');
    let modoActual = bodyElement.classList.contains('dark-mode') ? 'Modo Oscuro' : 'Modo Claro';
    modoBoton.textContent = modoActual;
});

document.addEventListener('DOMContentLoaded', function () {
  const panelImgButton = document.getElementById('panel-img-boton');
  const panelTextButton = document.getElementById('panel-text-boton');

  const panelImagen = document.getElementById("panel-imagen");
  const panelTexto = document.getElementById("panel-texto");

  panelImgButton.addEventListener('click', function () {
    panelImagen.classList.remove('oculto');
    panelTexto.classList.add('oculto');
  });

  panelTextButton.addEventListener('click', function () {
    panelTexto.classList.remove('oculto');
    panelImagen.classList.add('oculto');
  });

  const botonCerrarPanelImg = document.getElementById('ocultarColumnaButtonImg');
  const botonCerrarPanelText = document.getElementById('ocultarColumnaButtonText');

  botonCerrarPanelImg.addEventListener('click', () => {
    panelImagen.classList.add('oculto');
  });

  botonCerrarPanelText.addEventListener('click', () => {
    panelTexto.classList.add('oculto');
  });
});


//-------------IMAGEN---------------------
// ACA ESTA EL PASO a PASO PARA PODER AGREGAR LA IMAGEN EN EL CONTENEDOR//

const contenedorMeme = document.querySelector('.imagen-meme');
const urlInput = document.querySelector('#url-img-input'); 
const filtrosInput = document.querySelector('#blend-mode-select'); 
const cargarImagen = () => {
    const imageUrl = urlInput.value;
    if (imageUrl) {
        contenedorMeme.style.backgroundImage = `url('${imageUrl}')`;
        contenedorMeme.style.mixBlendMode = filtrosInput.value; 
    }
};

urlInput.addEventListener('input', cargarImagen);
filtrosInput.addEventListener('change', cargarImagen);

//ACA APLICARIA LOS COLORES FONDO 

function cambiarColorFondo() {
  const fondoMeme = document.getElementById('image-meme');
  const blendModeBgcInput = document.getElementById('blend-mode-bgc');

  fondoMeme.style.backgroundColor = blendModeBgcInput.value;
}

//cambiar el fondo cuando se selecciona un nuevo color
document.getElementById('blend-mode-bgc').addEventListener('input', cambiarColorFondo);


//ACA APLICARIA LOS FILTROS

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



document.addEventListener('DOMContentLoaded', function () {
  
  const descargarMemeBoton = document.getElementById('descargar-meme-boton');
  const contenedorMeme = document.getElementById('contenedor-meme');

  // Función para descargar la imagen
  const descargarMeme = () => {
      
      domtoimage.toBlob(contenedorMeme)
          .then(function (blob) {
            
              saveAs(blob, 'meme.png');
          });
  };
 
  descargarMemeBoton.addEventListener('click', descargarMeme);
});





//------------------TEXTO ------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const nombreTextArea = document.getElementById('nombre');
    const bottomTextArea = document.getElementById('bottom-text-input');
    const textoSuperior = document.querySelector('.subtitulo + .contenedor-secundario');
    const textoInferior = document.querySelector('.subtitulo2 + .contenedor-secundario');


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
      const alineacion = document.querySelector('.contenedor-de-texto3').value;
      textContainer.style.textAlign = alineacion;
      
      // Color de texto
      const colorTexto = document.getElementById('text-color-label').value;
      textContainer.style.color = colorTexto;
  
      // Color de fondo
      const colorFondo = document.getElementById('color-de-texto-label').value;
      textContainer.style.backgroundColor = colorFondo;
  
      // Fondo transparente
      const fondoTransparente = document.getElementById('text-no-background-checkbox').checked;
      textContainer.style.backgroundColor = fondoTransparente ? 'transparent' : colorFondo;
  
      // Contorno
      const contorno = document.querySelector('.contenedor-de-texto5').value;
      textContainer.style.textShadow = contorno;
  
      // Espaciado
      const espaciado = document.getElementById('contenido').value + 'px';
      textContainer.style.padding = `0 ${espaciado}`;
  
      // Interlineado
      const interlineado = document.getElementById('seleccion-de-lineado').value;
      textContainer.style.lineHeight = interlineado;
    }
  
   
    const elementosEstilo = document.querySelectorAll('.contenedor-de-texto, .contenedor-de-texto2, .contenedor-de-texto3, .contenedor-de-texto4, .contenedor-de-texto5, #text-no-background-checkbox');
    elementosEstilo.forEach(function (elemento) {
      elemento.addEventListener('input', actualizarEstilo);
    });
  
    actualizarEstilo();
  });




   