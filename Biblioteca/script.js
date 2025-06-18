// Cambiar tema (modo oscuro)
document.querySelector('.dark-mode-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Mostrar secciones
function showSection(sectionId) {
  const sections = document.querySelectorAll('.content');
  sections.forEach(section => section.classList.remove('active'));

  const section = document.getElementById(sectionId);
  section.classList.add('active');
}

// Cargar PDF en iframe
function loadPDF() {
  const fileInput = document.getElementById('file-upload');
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const iframe = document.getElementById('pdf-viewer');
      iframe.style.display = 'block';
      iframe.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

// Colapsar/expandir sidebar
document.getElementById('toggle-sidebar').addEventListener('click', () => {
  const sidebar = document.querySelector('.sidebar');
  const button = document.getElementById('toggle-sidebar');

  sidebar.classList.toggle('collapsed');

  // Cambiar el icono del botón según estado
  if (sidebar.classList.contains('collapsed')) {
    button.textContent = '⏩';
  } else {
    button.textContent = '⏪';
  }
});
