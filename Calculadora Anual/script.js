// Función para calcular los impuestos anuales
function calcularImpuestosAnuales() {
  // Obtener el ingreso anual y los deducibles desde el formulario HTML
  const ingresoAnual = parseFloat(document.getElementById("ingresoAnual").value);
  const deducibles = parseFloat(document.getElementById("deducibles").value) || 0;

  if (!ingresoAnual || ingresoAnual <= 0) {
    document.getElementById("resultadoImpuestos").innerHTML = "<strong>Por favor, ingresa un monto válido.</strong>";
    return;
  }

  // Se elimina el IVA de los deducibles
  const baseDeducibles = deducibles; // No se divide entre 1.16, ya que no consideramos el IVA

  // Cálculo del ingreso neto anual después de deducibles
  const ingresoNetoAnual = ingresoAnual - baseDeducibles;

  let isr = 0;
  let porcentajeISR = 0;

  // Tablas de ISR para Actividad Empresarial (nuevas tarifas progresivas según el ingreso neto anual)
  const tarifasAnuales = [
    { limiteInferior: 0.01, limiteSuperior: 8952.49, cuota: 0.00, tasa: 1.92 },
    { limiteInferior: 8252.50, limiteSuperior: 75984.55, cuota: 171.88, tasa: 6.40 },
    { limiteInferior: 75984.56, limiteSuperior: 133536.07, cuota: 4461.94, tasa: 10.88 },
    { limiteInferior: 133536.08, limiteSuperior: 155229.80, cuota: 10723.55, tasa: 16.00 },
    { limiteInferior: 155229.81, limiteSuperior: 185852.57, cuota: 14194.54, tasa: 17.92 },
    { limiteInferior: 185852.58, limiteSuperior: 374837.88, cuota: 19682.13, tasa: 21.36 },
    { limiteInferior: 374837.89, limiteSuperior: 590795.99, cuota: 60049.40, tasa: 23.52 },
    { limiteInferior: 590796.00, limiteSuperior: 1127926.84, cuota: 110842.74, tasa: 30.00 },
    { limiteInferior: 1127926.85, limiteSuperior: 1503902.46, cuota: 271981.99, tasa: 32.00 },
    { limiteInferior: 1503902.47, limiteSuperior: 4511707.37, cuota: 392294.17, tasa: 34.00 },
    { limiteInferior: 4511707.38, limiteSuperior: Infinity, cuota: 1414947.85, tasa: 35.00 },
  ];

  // Cálculo de ISR según la tabla progresiva
  for (const tramo of tarifasAnuales) {
    if (ingresoNetoAnual >= tramo.limiteInferior && ingresoNetoAnual <= tramo.limiteSuperior) {
      const excedente = ingresoNetoAnual - tramo.limiteInferior;
      isr = tramo.cuota + (excedente * tramo.tasa) / 100;
      porcentajeISR = tramo.tasa;
      break;
    }
  }

  // Mostrar resultados en la tabla
  document.getElementById("ingresoAnualValor").innerText = "$" + Math.round(ingresoAnual);
  document.getElementById("gastosAnualesValor").innerText = "$" + Math.round(deducibles);
  document.getElementById("isrAnual").innerText = "$" + Math.round(isr);
  document.getElementById("porcentajeISR").innerText = porcentajeISR + "%";
  document.getElementById("resultadoImpuestos").style.display = "block";
}
