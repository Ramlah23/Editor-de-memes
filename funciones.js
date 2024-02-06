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
  const textoSuperiorContenedor = document.querySelector('.subtitulo');
  const textoInferiorContenedor = document.querySelector('.subtitulo2');

  // Función para actualizar el contenido de las secciones de texto
  function actualizarTexto() {
      textoSuperiorContenedor.textContent = nombreTextArea.value;
      textoInferiorContenedor.textContent = bottomTextArea.value;
  }

  // Agregar eventos de entrada para los campos de texto
  nombreTextArea.addEventListener('input', actualizarTexto);
  bottomTextArea.addEventListener('input', actualizarTexto);

  // Agregar evento para el botón "Quitar texto superior"
  const removeTopTextCheckbox = document.getElementById('remove-top-text');
  removeTopTextCheckbox.addEventListener('change', function () {
      textoSuperiorContenedor.style.display = this.checked ? 'none' : 'block';
  });

  // Agregar evento para el botón "Quitar texto inferior"
  const removeBottomTextCheckbox = document.getElementById('remove-bottom-text');
  removeBottomTextCheckbox.addEventListener('change', function () {
      textoInferiorContenedor.style.display = this.checked ? 'none' : 'block';
  });

 
  // Función para actualizar el estilo de las secciones de texto

  function actualizarEstilo() {
    const textContainer = document.querySelector('.contenedor-secundario');
  
  // ESTILO DE FUENTE

    textoSuperiorContenedor.style.fontFamily = document.getElementById('text-fuente-family').value;
    textoInferiorContenedor.style.fontFamily = document.getElementById('text-fuente-family').value;

  // TAMAÑO DE FUENTE

    textoSuperiorContenedor.style.fontSize = document.getElementById('texto-tamaño').value + 'px';
    textoInferiorContenedor.style.fontSize = document.getElementById('texto-tamaño').value + 'px';
      
  // COLOR DE FONDO

  const colorFondoInput = document.getElementById('color-de-texto');
  const textoSuperior = document.querySelector('.subtitulo');
  const textoInferior = document.querySelector('.subtitulo2');

colorFondoInput.addEventListener('input', function() {
  const colorFondo = colorFondoInput.value;
  textoSuperior.style.backgroundColor = colorFondo;
  textoInferior.style.backgroundColor = colorFondo;
});

  const colorInicial = colorFondoInput.value;
  textoSuperior.style.backgroundColor = colorInicial;
  textoInferior.style.backgroundColor = colorInicial;
  
  // FONDO TRANSPARENTE

    const fondoTransparente = document.getElementById('text-no-background-checkbox').checked;
    textContainer.style.backgroundColor = fondoTransparente ? 'transparent' : colorFondo;
  
  // ESPACIADO

    const espaciado = document.getElementById('contenido').value + 'px';
    textContainer.style.padding = `0 ${espaciado}`;
  
  // INTERALINEADO

    const interlineado = document.getElementById('seleccion-de-lineado').value;
    textContainer.style.lineHeight = interlineado;
    }
   
    const elementosEstilo = document.querySelectorAll('.contenedor-de-texto, .contenedor-de-texto2, .contenedor-de-texto4, .contenedor-de-texto5, #text-no-background-checkbox');
    elementosEstilo.forEach(function (elemento) {
      elemento.addEventListener('input', actualizarEstilo);
    });

  //ALINEACION DE TEXTO
    // textContainer.querySelector('.subtitulo').style.textAlign = "right";

    const elementosEstilo2 = ['#left-align-btn', '#center-align-btn', '#right-align-btn'];
    elementosEstilo2.forEach(function (elemento) {
      // elemento.addEventListener('click', actualizarEstilo);
    });
  
    document.querySelector('#left-align-btn').addEventListener('click', () => {
      document.querySelector('.subtitulo').style.textAlign = "left";
      document.querySelector('.subtitulo2').style.textAlign = "left";
  });
  
  document.querySelector('#center-align-btn').addEventListener('click', () => {
      document.querySelector('.subtitulo').style.textAlign = "center";
      document.querySelector('.subtitulo2').style.textAlign = "center";
  });
  
  document.querySelector('#right-align-btn').addEventListener('click', () => {
      document.querySelector('.subtitulo').style.textAlign = "right";
      document.querySelector('.subtitulo2').style.textAlign = "right";
  });
    
  });

// COLOR DE TEXTO

  const colorTextoInput = document.getElementById('text-color-input');
  const textoSuperior = document.querySelector('.subtitulo');
  const textoInferior = document.querySelector('.subtitulo2');

colorTextoInput.addEventListener('input', function() {
  const colorTexto = colorTextoInput.value;
  textoSuperior.style.color = colorTexto;
  textoInferior.style.color = colorTexto;
});

  const colorInicial = colorTextoInput.value;
  textoSuperior.style.color = colorInicial;
  textoInferior.style.color = colorInicial;

// CONTORNO
   
  const elementosEstilo2 = ['#no-outline-btn', '#light-outline-btn', '#dark-outline-btn'];

  elementosEstilo2.forEach(function (elemento) {
   // elemento.addEventListener('click', actualizarEstilo);
  });
      
  document.querySelector('#no-outline-btn').addEventListener('click', () => {
  document.querySelector('.subtitulo').style.textShadow = "none"; // Sin contorno
  document.querySelector('.subtitulo2').style.textShadow = "none"; // Sin contorno
  });
      
  document.querySelector('#light-outline-btn').addEventListener('click', () => {
  document.querySelector('.subtitulo').style.textShadow = "1px 1px 1px #fff"; // Contorno claro
  document.querySelector('.subtitulo2').style.textShadow = "1px 1px 1px #fff"; // Contorno claro
  });
      
  document.querySelector('#dark-outline-btn').addEventListener('click', () => {
  document.querySelector('.subtitulo').style.textShadow = "1px 1px 1px #000"; // Contorno oscuro
  document.querySelector('.subtitulo2').style.textShadow = "1px 1px 1px #000"; // Contorno oscuro
      });
     