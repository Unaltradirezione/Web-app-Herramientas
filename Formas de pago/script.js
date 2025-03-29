// Función para filtrar la lista de formas de pago según el texto ingresado en el campo de búsqueda
function filterList() {
    // Obtener el valor del campo de búsqueda y convertirlo a minúsculas para hacer la búsqueda insensible a mayúsculas/minúsculas
    let input = document.getElementById("search").value.toLowerCase();

    // Obtener la tabla donde se encuentran las formas de pago
    let table = document.getElementById("paymentTable");

    // Obtener todas las filas de la tabla
    let tr = table.getElementsByTagName("tr");

    // Recorrer todas las filas de la tabla (excepto la primera, que es el encabezado)
    for (let i = 1; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td"); // Obtener todas las celdas de la fila
        let found = false; // Variable para saber si hay coincidencia en la fila

        // Recorrer todas las celdas de la fila
        for (let j = 0; j < td.length; j++) {
            // Si alguna celda contiene el texto ingresado, marcar la fila como encontrada
            if (td[j].innerText.toLowerCase().includes(input)) {
                found = true;
                break; // Terminar el bucle si se encuentra una coincidencia
            }
        }

        // Mostrar la fila si hay coincidencia, ocultarla si no la hay
        tr[i].style.display = found ? "" : "none";
    }
}
