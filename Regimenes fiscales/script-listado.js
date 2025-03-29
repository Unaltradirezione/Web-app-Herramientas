// Función para filtrar la tabla en función del texto ingresado en el campo de búsqueda
function filterList() {
    // Obtiene el valor de búsqueda y lo convierte a minúsculas
    let input = document.getElementById('search').value.toLowerCase();
    // Obtiene el contenedor de la tabla y la tabla en sí
    let tableContainer = document.getElementById('tableContainer');
    let table = document.getElementById('productTable');
    // Obtiene todas las filas de la tabla
    let rows = table.getElementsByTagName('tr');
    let found = false; // Variable que indica si se ha encontrado alguna coincidencia

    // Itera sobre todas las filas, empezando desde la fila 1 (para omitir el encabezado)
    for (let i = 1; i < rows.length; i++) {
        // Obtiene todas las celdas de la fila
        let cells = rows[i].getElementsByTagName('td');
        let match = false;

        // Recorre todas las celdas de la fila para buscar coincidencias
        for (let j = 0; j < cells.length; j++) {
            // Si el contenido de la celda coincide con el texto de búsqueda, marca la fila como coincidente
            if (cells[j].textContent.toLowerCase().includes(input)) {
                match = true;
                break;
            }
        }

        // Muestra la fila si hay coincidencia, de lo contrario, la oculta
        rows[i].style.display = match ? '' : 'none';

        // Si se encuentra una coincidencia, actualiza la variable found
        if (match) {
            found = true;
        }
    }

    // Muestra el contenedor de la tabla solo si se encuentran coincidencias y el campo de búsqueda no está vacío
    tableContainer.style.display = "block";
}
