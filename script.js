function mostrarInfo(nombre, detalle, calificacion = "No disponible") {
    document.getElementById("tituloCurso").innerText = nombre;
    document.getElementById("detalleCurso").innerText = detalle;
  
    const calElem = document.getElementById("calificacionCurso");
    calElem.innerText = "Calificación: " + calificacion;
  
    const valor = parseFloat(calificacion);
    if (!isNaN(valor)) {
      if (valor >= 8) calElem.style.color = "green";
      else if (valor >= 6) calElem.style.color = "orange";
      else calElem.style.color = "red";
    } else {
      calElem.style.color = "gray";
    }
  
    document.getElementById("infoCurso").style.display = "block";
  }
  
  function cerrarInfo() {
    document.getElementById("infoCurso").style.display = "none";
  }
  
  // Agrega o quita tachado al hacer clic
  document.addEventListener("DOMContentLoaded", () => {
    const nodos = document.querySelectorAll(".nodo");
    nodos.forEach(nodo => {
      nodo.addEventListener("click", () => {
        nodo.classList.toggle("tachado");
      });
    });
  });
  
