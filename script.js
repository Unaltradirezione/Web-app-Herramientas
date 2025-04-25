// Función para mostrar el contenido de la pestaña activa
function showTab(tabId, event) {
  var contents = document.querySelectorAll('.content');
  contents.forEach(content => content.classList.remove('active'));

  var tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  event.currentTarget.classList.add('active');
}

// Función para aplicar un tema
function applyTheme(theme) {
  const body = document.body;
  const icon = document.getElementById('darkModeIcon');
  const darkModeButton = document.getElementById('darkModeToggle');
  const sidebar = document.querySelector('.sidebar');
  const sidebarItems = document.querySelectorAll('.sidebar-item');
  const contentElements = document.querySelectorAll('.content, .sidebar-item');

  // Limpiar clases previas
  body.classList.remove('dark-mode', 'green-mode');
  sidebar.classList.remove('dark-mode', 'green-mode');
  contentElements.forEach(item => item.classList.remove('dark-mode', 'green-mode', 'light-mode'));

  // Aplicar según tema
  if (theme === 'dark') {
    body.classList.add('dark-mode');
    sidebar.classList.add('dark-mode');
    contentElements.forEach(item => item.classList.add('dark-mode'));
    icon.classList.remove('fa-sun', 'fa-leaf');
    icon.classList.add('fa-moon');
    darkModeButton.style.backgroundColor = '#222222';
    darkModeButton.style.color = '#FFFFFF';

  } else if (theme === 'green') {
    body.classList.add('green-mode');
    sidebar.classList.add('green-mode');
    contentElements.forEach(item => item.classList.add('green-mode'));
    icon.classList.remove('fa-sun', 'fa-moon');
    icon.classList.add('fa-leaf');
    darkModeButton.style.backgroundColor = '#264d3b';
    darkModeButton.style.color = '#cdeac0';

  } else {
    // Modo claro
    contentElements.forEach(item => item.classList.add('light-mode'));
    icon.classList.remove('fa-moon', 'fa-leaf');
    icon.classList.add('fa-sun');
    darkModeButton.style.backgroundColor = '#007BFF';
    darkModeButton.style.color = '#FFFFFF';
  }

  body.dataset.theme = theme;
  localStorage.setItem('selectedTheme', theme);

  // 🚀 Enviar tema a los iframes
  const iframes = document.querySelectorAll('iframe');
  iframes.forEach(iframe => {
    iframe.contentWindow.postMessage({ type: "setMode", mode: theme }, "*");
  });
}

// Función para alternar entre los temas
function toggleDarkMode() {
  const currentTheme = document.body.dataset.theme || 'light';
  let nextTheme = 'dark';

  if (currentTheme === 'dark') {
    nextTheme = 'green';
  } else if (currentTheme === 'green') {
    nextTheme = 'light';
  }

  applyTheme(nextTheme);
}

// Activar ítems del sidebar
function activateSidebarItem(event) {
  var sidebarItems = document.querySelectorAll('.sidebar-item');
  sidebarItems.forEach(item => item.classList.remove('active'));
  event.currentTarget.classList.add('active');
}

// Al cargar el DOM
document.addEventListener('DOMContentLoaded', function () {
  var sidebarItems = document.querySelectorAll('.sidebar-item');
  sidebarItems.forEach(item => {
    item.addEventListener('click', activateSidebarItem);
  });

  // Aplicar el tema guardado
  const savedTheme = localStorage.getItem('selectedTheme') || 'light';
  applyTheme(savedTheme);
});
