  const fecha = document.querySelector(".fecha");
  console.log(fecha); 

  document.addEventListener("DOMContentLoaded", () => {
    fechaActual();
  });

function mostrarModal(tipo) {
  const modal = document.getElementById("miModal");
  const titulo = document.getElementById("modal-titulo");
    const texto = document.getElementById("modal-texto");
    const contenido = document.getElementById("contenidoModal");


  
    if (tipo === "html") {
      contenido.innerHTML = `
        <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;&lt;title&gt;Ejemplo HTML&lt;/title&gt;&lt;/head&gt;
  &lt;body&gt;&lt;h1&gt;Hola Mundo&lt;/h1&gt;&lt;/body&gt;
&lt;/html&gt;
        </pre>
      `;
    }
    if (tipo === "xml") {
      contenido.innerHTML = `
        <pre>
&lt;persona&gt;
&lt;nombre&gtJuan Pérez&lt;/nombre&gt;
  &lt;edad&gt;30&lt;/edad&gt
  &lt;email&gt;juan@example.com&lt;/email&gt;
  &lt;/persona&gt;
        </pre>
      `;
    }

    if (tipo === "json") {
      contenido.innerHTML = `
        <pre>
Por ejemplo, los mismos datos anteriores en JSON quedarían:

 [
  {"fruta": "Manzana", "color": "Rojo"},
  {"fruta": "Plátano", "color": "Amarillo"}
]
        </pre>
      `;
    }

    if (tipo === "gml") {
      contenido.innerHTML = `
        <pre>
Por ejemplo, un punto geográfico podría expresarse en GML así:

&lt;gml:Point srsName="EPSG:4326"&gt;
  &lt;gml:coordinates&gt;19.4326,-99.1332&lt;/gml:coordinates&gt;
&lt;/gml:Point&gt;

        </pre>
      `;
    }
  
    modal.style.display = "block";

    function cerrarModal() {
      document.getElementById("miModal").style.display = "none";
    }
    window.onclick = function(event) {
      const modal = document.getElementById("miModal");
      if (event.target === modal) {
        cerrarModal();
      }
  }
}
  