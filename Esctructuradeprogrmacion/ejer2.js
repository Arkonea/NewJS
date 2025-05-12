const edad = parseInt(prompt("Ingrese su edad:"));
const tieneCedula = confirm("¿Tiene cédula?");
const cedulaInscrita = confirm("¿Tiene su cédula inscrita?");
if (edad >= 18 && tieneCedula && cedulaInscrita) {
  console.log("Puede votar.");
} else {
  console.log("No puede votar.");
}