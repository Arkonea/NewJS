const salario = parseFloat(prompt("Ingrese su salario mensual:"));
let impuesto = 0;
if (salario > 10000000) {
  impuesto = salario * 0.15;
} else if (salario > 5000000) {
  impuesto = salario * 0.10;
} else if (salario > 2000000) {
  impuesto = salario * 0.05;
} else {
  impuesto = 0;
}
console.log(`Impuesto a pagar: $${impuesto}`);