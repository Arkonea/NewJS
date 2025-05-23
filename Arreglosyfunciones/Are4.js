// Ejercicio 4: Contar vocales en una cadena//
function contarVocales(cadena) {
  return [...cadena].filter(c => 'aeiouAEIOU'.includes(c)).length;
}