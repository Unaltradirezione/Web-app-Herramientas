// Cierra el menú al hacer clic en cualquier botón del sidebar
const links = document.querySelectorAll('.sidebar-menu button');
links.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
  });
});

// Alternar visibilidad del botón "Página SAT" al hacer clic en el botón "SAT"
const toggleButton = document.getElementById('toggleSAT');
const paginaSAT = document.getElementById('paginaSAT');

if (toggleButton && paginaSAT) {
  toggleButton.addEventListener('click', () => {
    if (paginaSAT.style.display === 'none' || paginaSAT.style.display === '') {
      paginaSAT.style.display = 'block';
    } else {
      paginaSAT.style.display = 'none';
    }
  });
}
