const num = parseInt(prompt("Ingrese un número:"));
let esPrimo = num > 1;

for (let i = 2; i <= Math.sqrt(num); i++) {
  if (num % i === 0) {
    esPrimo = false;
    break;
  }
}
console.log(esPrimo ? "Es primo" : "No es primo");