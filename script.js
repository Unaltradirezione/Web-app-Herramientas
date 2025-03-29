// Función para mostrar el contenido de la pestaña activa
function showTab(tabId, event) {
  // Ocultar todos los contenidos
  var contents = document.querySelectorAll('.content');
  contents.forEach(content => content.classList.remove('active'));

  // Desactivar todas las pestañas
  var tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));

  // Mostrar el contenido de la pestaña seleccionada
  document.getElementById(tabId).classList.add('active');
  event.currentTarget.classList.add('active');
}

// Función para alternar el modo oscuro
function toggleDarkMode() {
  // Alternar la clase dark-mode en el body
  document.body.classList.toggle('dark-mode');

  // Referencia al icono del botón
  var darkModeIcon = document.getElementById('darkModeIcon');

  // Cambiar icono según el estado de dark mode
  if (document.body.classList.contains('dark-mode')) {
    darkModeIcon.classList.remove('fa-sun'); // Quitar icono de sol
    darkModeIcon.classList.add('fa-moon');   // Agregar icono de luna
  } else {
    darkModeIcon.classList.remove('fa-moon'); // Quitar icono de luna
    darkModeIcon.classList.add('fa-sun');     // Agregar icono de sol
  }

  // Cambiar los estilos del botón "Modo Oscuro"
  var darkModeButton = document.getElementById('darkModeToggle'); // Asegúrate que el id sea correcto
  if (document.body.classList.contains('dark-mode')) {
    darkModeButton.style.backgroundColor = '#222222'; // Fondo oscuro
    darkModeButton.style.color = '#FFFFFF'; // Texto blanco
  } else {
    darkModeButton.style.backgroundColor = '#007BFF'; // Fondo azul normal
    darkModeButton.style.color = '#FFFFFF'; // Texto blanco
  }

  // Cambiar los estilos del sidebar y sus elementos
  var sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('dark-mode'); // Cambia el fondo del sidebar

  var sidebarItems = document.querySelectorAll('.sidebar-item');
  sidebarItems.forEach(item => item.classList.toggle('dark-mode')); // Cambia cada ítem del sidebar

  // Cambiar colores del contenido fuera del modo oscuro
  var contentElements = document.querySelectorAll('.content, .sidebar-item');
  contentElements.forEach(item => {
    if (document.body.classList.contains('dark-mode')) {
      item.classList.remove('light-mode');
      item.classList.add('dark-mode'); // Cambiar a colores oscuros
    } else {
      item.classList.remove('dark-mode');
      item.classList.add('light-mode'); // Colores más suaves (gris) en modo claro
    }
  });
}

// Función para manejar la activación de elementos en el sidebar
function activateSidebarItem(event) {
  var sidebarItems = document.querySelectorAll('.sidebar-item');
  sidebarItems.forEach(item => item.classList.remove('active'));
  event.currentTarget.classList.add('active');
}

// Evento para el sidebar (se debe ejecutar después de cargar el DOM)
document.addEventListener('DOMContentLoaded', function () {
  var sidebarItems = document.querySelectorAll('.sidebar-item');
  sidebarItems.forEach(item => {
    item.addEventListener('click', activateSidebarItem);
  });

  // Asegurar que el icono de modo oscuro inicie correctamente al cargar la página
  var darkModeIcon = document.getElementById('darkModeIcon');
  if (document.body.classList.contains('dark-mode')) {
    darkModeIcon.classList.remove('fa-sun');
    darkModeIcon.classList.add('fa-moon');
  } else {
    darkModeIcon.classList.remove('fa-moon');
    darkModeIcon.classList.add('fa-sun');
  }
});
