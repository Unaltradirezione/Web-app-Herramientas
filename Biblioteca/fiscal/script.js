// Mostrar u ocultar el contenido del tema
document.addEventListener('DOMContentLoaded', () => {
  ordenarTemasAlfabeticamente(); // Ordenar al iniciar

  const botones = document.querySelectorAll('.tema-btn');
  botones.forEach(btn => {
    btn.addEventListener('click', () => {
      const contenido = btn.nextElementSibling;
      contenido.style.display = contenido.style.display === 'block' ? 'none' : 'block';
    });
  });
});

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
