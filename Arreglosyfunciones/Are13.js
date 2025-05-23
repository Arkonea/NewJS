// Ejercicio 13: Reemplazar un valor//
function reemplazarValor(arreglo, viejoValor, nuevoValor) {
  return arreglo.map(v => v === viejoValor ? nuevoValor : v);
}