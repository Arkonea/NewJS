// Ejercicio 2: Generar contraseñas seguras //

function generarContrasena() {
  const mayus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const minus = 'abcdefghijklmnopqrstuvwxyz';
  const digitos = '0123456789';
  const especiales = '@#$%&()=?¿*+[]{}';

  function aleatorio(str, cantidad) {
    return Array.from({ length: cantidad }, () => str[Math.floor(Math.random() * str.length)]).join('');
  }

  let contrasena = (
    aleatorio(mayus, 2) +
    aleatorio(minus, 2) +
    aleatorio(digitos, 2) +
    aleatorio(especiales, 2)
  ).split('').sort(() => Math.random() - 0.5).join('');

  return contrasena;
}
