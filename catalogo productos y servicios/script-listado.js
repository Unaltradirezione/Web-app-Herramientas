function filterList() {
    let input = document.getElementById('search').value.toLowerCase();
    let tableContainer = document.getElementById('tableContainer');
    let table = document.getElementById('productTable');
    let rows = table.getElementsByTagName('tr');
    let found = false; // Variable para verificar si hay coincidencias

    for (let i = 1; i < rows.length; i++) { // Empezamos en 1 para evitar el encabezado
        let cells = rows[i].getElementsByTagName('td');
        let match = false;

        for (let j = 0; j < cells.length; j++) {
            if (cells[j].textContent.toLowerCase().includes(input)) {
                match = true;
                break;
            }
        }

        rows[i].style.display = match ? '' : 'none';

        if (match) {
            found = true; // Se encontró al menos una coincidencia
        }
    }

    // Mostrar la tabla solo si hay resultados y si el campo de búsqueda no está vacío
    tableContainer.style.display = "block"

}
