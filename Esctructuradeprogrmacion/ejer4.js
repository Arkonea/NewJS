const edad = parseInt(prompt("Ingrese su edad:"));
let precio = 0;
if (edad < 5) {
  precio = 0;
} else if (edad <= 18) {
  precio = 5000;
} else {
  precio = 10000;
}
console.log(`Debe pagar: $${precio}`);