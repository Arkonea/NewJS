const a = parseInt(prompt("Ingrese el primer número:"));
const b = parseInt(prompt("Ingrese el segundo número:"));
const inicio = Math.min(a, b);
const fin = Math.max(a, b);

for (let i = inicio; i <= fin; i++) {
  if (i % 3 === 0) console.log(i);
}