const n1 = parseInt(prompt("Ingrese el primer número:"));
const n2 = parseInt(prompt("Ingrese el segundo número:"));
let sumaPares = 0;
let sumaImpares = 0;
let conteoImpares = 0;

for (let i = Math.min(n1, n2); i <= Math.max(n1, n2); i++) {
  if (i % 2 === 0) {
    sumaPares += i;
  } else {
    sumaImpares += i;
    conteoImpares++;
  }
}
const promedioImpares = conteoImpares ? (sumaImpares / conteoImpares) : 0;

console.log(`Suma de pares: ${sumaPares}`);
console.log(`Promedio de impares: ${promedioImpares}`);