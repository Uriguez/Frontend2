let lecturaEnCurso = false;
let indiceFrase = 0;
let spans = [];

function leerFrases() {
  if (lecturaEnCurso) return;

  const contenido = document.getElementById("texto-lectura");
  const textoOriginal = contenido.textContent;

  const frases = textoOriginal.match(/[^\\.\\!\\?]+[\\.\\!\\?]?/g);
  if (!frases) return;

  contenido.innerHTML = frases.map(f => `<span>${f.trim()}</span>`).join(" ");
  spans = contenido.querySelectorAll("span");
  indiceFrase = 0;
  lecturaEnCurso = true;

  speechSynthesis.cancel();

  leerSiguienteFrase(frases);
}

function leerSiguienteFrase(frases) {
  if (!lecturaEnCurso || indiceFrase >= spans.length) {
    lecturaEnCurso = false;
    return;
  }

  const frase = spans[indiceFrase].textContent;

  spans.forEach(span => span.classList.remove("resaltado"));
  spans[indiceFrase].classList.add("resaltado");

  const voz = new SpeechSynthesisUtterance(frase);
  voz.lang = 'es-ES';
  voz.rate = 0.9;

  voz.onend = function () {
    indiceFrase++;
    leerSiguienteFrase(frases);
  };

  speechSynthesis.speak(voz);
}

function detenerLectura() {
  speechSynthesis.cancel();
  lecturaEnCurso = false;
  if (spans.length > 0) {
    spans.forEach(span => span.classList.remove("resaltado"));
  }
}
