//*COMIENZO DE FUNCIONALIDAD*//

// Declaración de variables globales

let modoBoton = document.getElementById("modoBoton");
let bodyElement = document.body;

modoBoton.addEventListener("click", function () {
  bodyElement.classList.toggle("dark-mode");
  let modoActual = bodyElement.classList.contains("dark-mode")
    ? "Modo Oscuro"
    : "Modo Claro";
  modoBoton.textContent = modoActual;
});

document.addEventListener("DOMContentLoaded", function () {
  const panelImgButton = document.getElementById("panel-img-boton");
  const panelTextButton = document.getElementById("panel-text-boton");

  const panelImagen = document.getElementById("panel-imagen");
  const panelTexto = document.getElementById("panel-texto");

  panelImgButton.addEventListener("click", function () {
    panelImagen.classList.remove("oculto");
    panelTexto.classList.add("oculto");
  });

  panelTextButton.addEventListener("click", function () {
    panelTexto.classList.remove("oculto");
    panelImagen.classList.add("oculto");
  });

  const botonCerrarPanelImg = document.getElementById(
    "ocultarColumnaButtonImg"
  );
  const botonCerrarPanelText = document.getElementById(
    "ocultarColumnaButtonText"
  );

  botonCerrarPanelImg.addEventListener("click", () => {
    panelImagen.classList.add("oculto");
  });

  botonCerrarPanelText.addEventListener("click", () => {
    panelTexto.classList.add("oculto");
  });
});

//-------------IMAGEN---------------------
// ACA ESTA EL PASO a PASO PARA PODER AGREGAR LA IMAGEN EN EL CONTENEDOR//

const contenedorMeme = document.querySelector(".imagen-meme");
const urlInput = document.querySelector("#url-img-input");
const filtrosInput = document.querySelector("#blend-mode-select");
const cargarImagen = () => {
  const imageUrl = urlInput.value;
  if (imageUrl) {
    contenedorMeme.style.backgroundImage = `url('${imageUrl}')`;
    contenedorMeme.style.mixBlendMode = filtrosInput.value;
  }
};

urlInput.addEventListener("input", cargarImagen);
filtrosInput.addEventListener("change", cargarImagen);

//ACA APLICARIA LOS COLORES FONDO

function cambiarColorFondo() {
  const fondoMeme = document.getElementById("image-meme");
  const blendModeBgcInput = document.getElementById("blend-mode-bgc");

  fondoMeme.style.backgroundColor = blendModeBgcInput.value;
}

//cambiar el fondo cuando se selecciona un nuevo color
document
  .getElementById("blend-mode-bgc")
  .addEventListener("input", cambiarColorFondo);

//ACA APLICARIA LOS FILTROS

document.addEventListener("DOMContentLoaded", function () {
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
  const restablecerFiltrosButton = document.getElementById(
    "restablecer-filtros"
  );

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

    // Aplica los filtros y el modo de mezcla al contenedor de imagen
    imageContainer.style.filter = `brightness(${brightnessValue}) opacity(${opacityValue}) contrast(${contrastValue}%) blur(${blurValue}px) grayscale(${grayscaleValue}%) sepia(${sepiaValue}%) hue-rotate(${hueValue}deg) saturate(${saturateValue}%) invert(${invertValue})`;
    imageContainer.style.backgroundColor = blendModeBgcValue;
    imageContainer.style.mixBlendMode = blendModeSelectValue;
  }
});

//DESCARGAR MEME//

document.addEventListener("DOMContentLoaded", function () {
  const descargarMemeBoton = document.getElementById("descargar-meme-boton");
  const contenedorMeme = document.getElementById("contenedor-meme");

  // Función para descargar la imagen
  const descargarMeme = () => {
    domtoimage.toBlob(contenedorMeme).then(function (blob) {
      saveAs(blob, "meme.png");
    });
  };

  descargarMemeBoton.addEventListener("click", descargarMeme);
});

//------------------TEXTO ------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const nombreTextArea = document.getElementById("top-text-input");
  const bottomTextArea = document.getElementById("bottom-text-input");
  const textoSuperiorContenedor = document.querySelector(".subtitulo");
  const textoInferiorContenedor = document.querySelector(".subtitulo2");

  // Función para actualizar el contenido de las secciones de texto
  function actualizarTexto() {
    textoSuperiorContenedor.textContent = nombreTextArea.value;
    textoInferiorContenedor.textContent = bottomTextArea.value;
  }

  // Agregar eventos de entrada para los campos de texto
  nombreTextArea.addEventListener("input", actualizarTexto);
  bottomTextArea.addEventListener("input", actualizarTexto);

  // Función para actualizar el estilo de las secciones de texto

  function actualizarEstilo() {
    const textContainer = document.querySelector(".contenedor-secundario");

    // COLOR DE FONDO //NO FUNCIONA

    const colorFondoInput = document.getElementById("Fondo-color-input");
    const textoSuperior = document.querySelector(".subtitulo");
    const textoInferior = document.querySelector(".subtitulo2");

    colorFondoInput.addEventListener("input", function () {
      const fondoColor = fondoColorInput.value;
      textoSuperior.style.backgroundColor = fondoColor;
      textoInferior.style.backgroundColor = fondoColor;
    });

    // FONDO TRANSPARENTE OK

    const fondoTransparente = document.getElementById(
      "text-no-background-checkbox"
    ).checked;
    textContainer.style.backgroundColor = fondoTransparente
      ? "transparent"
      : colorFondoInput.value;

    // ESPACIADO *NO FUNCIONA *

    const espaciado = document.getElementById("contenido").value + "px";
    textContainer.style.padding = `0 ${espaciado}`;

    // INTERALINEADO *NO FUNCIONA *

    const interlineado = document.getElementById("seleccion-de-lineado").value;
    textContainer.style.lineHeight = interlineado;
  }

  const elementosEstilo = document.querySelectorAll(
    ".contenedor-secundario, .contenedor-de-texto, .contenedor-de-texto2, .contenedor-de-texto4, .contenedor-de-texto5, #text-no-background-checkbox,#Fondo-color-input"
  );
  elementosEstilo.forEach(function (elemento) {
    elemento.addEventListener("input", actualizarEstilo);
  });

  // COLOR DE TEXTO OK

  const colorTextoInput = document.getElementById("text-color");
  const textoSuperior = document.querySelector(".subtitulo");
  const textoInferior = document.querySelector(".subtitulo2");

  colorTextoInput.addEventListener("input", function () {
    const colorTexto = colorTextoInput.value;
    textoSuperior.style.color = colorTexto;
    textoInferior.style.color = colorTexto;
  });

  const colorInicial = colorTextoInput.value;
  textoSuperior.style.color = colorInicial;
  textoInferior.style.color = colorInicial;
});

// CONTORNO OK

document.addEventListener("DOMContentLoaded", () => {
  // Referencias a los botones de contorno
  const noOutlineButton = document.getElementById("no-outline-button");
  const lightOutlineButton = document.getElementById("light-outline-button");
  const darkOutlineButton = document.getElementById("dark-outline-button");
  const fontSelect = document.getElementById("font-select");

  // Añadir event listeners a los botones de contorno
  noOutlineButton.addEventListener("click", () => {
    document.querySelector(".subtitulo").style.textShadow = "none";
    document.querySelector(".subtitulo2").style.textShadow = "none";
  });

  lightOutlineButton.addEventListener("click", () => {
    document.querySelector(".subtitulo").style.textShadow = "1px 1px 1px #fff";
    document.querySelector(".subtitulo2").style.textShadow = "1px 1px 1px #fff";
  });

  darkOutlineButton.addEventListener("click", () => {
    document.querySelector(".subtitulo").style.textShadow = "1px 1px 1px #000";
    document.querySelector(".subtitulo2").style.textShadow = "1px 1px 1px #000";
  });

  // TIPO DE LETRA* Función para actualizar el estilo de las secciones de texto
  function actualizarEstilo() {
    const selectedFont = fontSelect.value;
    document.querySelector(".subtitulo").style.fontFamily = selectedFont;
    document.querySelector(".subtitulo2").style.fontFamily = selectedFont;
  }

  // Añadir event listener para el cambio de fuente de texto
  fontSelect.addEventListener("change", actualizarEstilo);
});

// TAMAÑO DE FUENTE OK

document.addEventListener("DOMContentLoaded", () => {
  const textSizeInput = document.getElementById("texto-tamaño");
  const textoSuperior = document.getElementById("texto-superior");
  const textoInferior = document.getElementById("texto-inferior");

  if (textSizeInput && textoSuperior && textoInferior) {
    textSizeInput.addEventListener("input", actualizarTamañoTexto);

    function actualizarTamañoTexto() {
      const textSize = textSizeInput.value + "px";
      textoSuperior.style.fontSize = textSize;
      textoInferior.style.fontSize = textSize;
    }
  }
});
// ALINEACION // ok

document
  .getElementById("text-left-align-button")
  .addEventListener("click", () => {
    textoSuperior.style.textAlign = "left";
    textoInferior.style.textAlign = "left";
  });

document
  .getElementById("text-center-align-button")
  .addEventListener("click", () => {
    textoSuperior.style.textAlign = "center";
    textoInferior.style.textAlign = "center";

    document
      .getElementById("text-right-align-button")
      .addEventListener("click", () => {
        textoSuperior.style.textAlign = "right";
        textoInferior.style.textAlign = "right";
      });
  });

//COLOR FONDO//

const colorFondoInput = document.getElementById("Fondo-color-input");
const textoSuperior = document.querySelector(".subtitulo");
const textoInferior = document.querySelector(".subtitulo2");

colorFondoInput.addEventListener("input", function () {
  const colorFondo = colorFondoInput.value;
  textoSuperior.style.backgroundColor = colorFondo;
  textoInferior.style.backgroundColor = colorFondo;
});

const colorInicial = colorFondoInput.value;
textoSuperior.style.backgroundColor = colorInicial;
textoInferior.style.backgroundColor = colorInicial;

document.addEventListener("DOMContentLoaded", function () {
  const textContainer = document.querySelector(".contenedor-secundario");

  // ESPACIADO
  const espaciadoInput = document.getElementById("contenido");
  espaciadoInput.addEventListener("input", actualizarEspaciado);

  function actualizarEspaciado() {
    const espaciado = espaciadoInput.value + "px";
    textContainer.style.padding = `0 ${espaciado}`;
  }

  // INTERLINEADO
  const interlineadoSelect = document.getElementById("seleccion-de-lineado");
  interlineadoSelect.addEventListener("change", actualizarInterlineado);

  function actualizarInterlineado() {
    const interlineado = interlineadoSelect.value;
    textContainer.style.lineHeight = interlineado;
  }
});