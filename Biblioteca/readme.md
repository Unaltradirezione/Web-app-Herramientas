agregar mas secciones a la biblioteca

Pasos para agregar más secciones:

    Crear la carpeta con contenido:

Por ejemplo, si quieres agregar una sección llamada "auditoría", creas una carpeta llamada auditoria con su propio index.html (y si quieres, sus estilos y scripts propios dentro).

/auditoria/index.html
/auditoria/style.css  (opcional)
/auditoria/script.js  (opcional)

    Agregar botón en el menú HTML:

Dentro del <ul class="sidebar-menu"> agrega un nuevo <li> con botón que llame a showSection('auditoria'):

<li><button class="btn-audit" onclick="showSection('auditoria')">Auditoría</button></li>

Si quieres, también le puedes agregar clase para iconos cuando el sidebar esté colapsado, por ejemplo:

.sidebar.collapsed .btn-audit::before {
  content: '🔍';  /* Icono para auditoría */
}

    No necesitas modificar el JS ni CSS principal, porque la función showSection es genérica y carga el iframe con el nombre de la carpeta que pases.

Resumen práctico:

    Carpeta: /nuevaseccion/index.html

    Botón menú:

<li><button class="btn-nueva" onclick="showSection('nuevaseccion')">Nueva Sección</button></li>

    (Opcional) Icono en sidebar colapsado:

.sidebar.collapsed .btn-nueva::before {
  content: '✨';
}

