const numero = parseInt(prompt("Ingrese un número:"));
if (isNaN(numero)) {
  console.log("No ingresó un número válido.");
} else {
  console.log(numero % 2 === 0 ? "Es par" : "Es impar");
}