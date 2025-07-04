// Mostrar u ocultar el contenido del tema y subtemas
document.addEventListener('DOMContentLoaded', () => {
  ordenarTemasAlfabeticamente(); // Ordenar al iniciar

  // Asignar toggle a todos los botones principales y subtemas
  document.querySelectorAll('.tema-btn, .subtema-btn').forEach(btn => {
    btn.addEventListener('click', () => toggleContenido(btn));
  });
});

// Función para mostrar/ocultar contenido siguiente a un botón
function toggleContenido(btn) {
  const contenido = btn.nextElementSibling;
  if (contenido.style.display === "block") {
    contenido.style.display = "none";
  } else {
    contenido.style.display = "block";
  }
}

// Función para filtrar los temas desde el input
function filtrarTemas() {
  const filtro = document.getElementById('search-input').value.toLowerCase();
  const temas = document.querySelectorAll('#temas-container .tema');

  temas.forEach(tema => {
    const nombre = tema.getAttribute('data-nombre');
    tema.style.display = nombre.includes(filtro) ? 'block' : 'none';
  });
}

// Función para ordenar los temas alfabéticamente por data-nombre
function ordenarTemasAlfabeticamente() {
  const container = document.getElementById('temas-container');
  const temas = Array.from(container.querySelectorAll('.tema'));

  temas.sort((a, b) => {
    const nombreA = a.getAttribute('data-nombre');
    const nombreB = b.getAttribute('data-nombre');
    return nombreA.localeCompare(nombreB);
  });

  // Vuelve a insertar los temas ordenados
  temas.forEach(tema => container.appendChild(tema));
}
