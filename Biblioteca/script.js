// Variable global para guardar la sección actual
let currentSection = '';

// ====== Modo oscuro ======
// Alterna la clase 'dark-mode' en el body al hacer click
document.querySelector('.dark-mode-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// ====== Función para mostrar sección con iframe ======
function showSection(sectionId) {
  const contentLoader = document.getElementById('content-loader');
  currentSection = sectionId;

  // Insertamos iframe para cargar el contenido de la carpeta de la sección
  contentLoader.innerHTML = `
    <iframe 
      src="${sectionId}/index.html" 
      title="Contenido de ${sectionId}" 
      frameborder="0"
      loading="lazy"
      style="width: 100%; height: 600px; border: none; border-radius: 8px;"
    ></iframe>
  `;
}

// ====== Función para colapsar el sidebar ======
document.getElementById('toggle-sidebar').addEventListener('click', () => {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('collapsed');

  // Cambia el ícono del botón según el estado del sidebar
  document.getElementById('toggle-sidebar').textContent = sidebar.classList.contains('collapsed') ? '⏩' : '⏪';
});
