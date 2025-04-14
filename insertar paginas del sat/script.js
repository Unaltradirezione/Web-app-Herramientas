const links = document.querySelectorAll('.sidebar-menu button');
links.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('menu-open');
    });
});
