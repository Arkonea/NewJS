// Ejercicio 1: Maximizar Z = x² + y²//
function maximizarZ() {
  let mejorX = 0;
  let mejorY = 0;
  let mejorZ = -Infinity;

  for (let i = 0; i < 100; i++) {
    let x = Math.random() * 10 - 5;
    let y = Math.random() * 10 - 5;
    let z = x ** 2 + y ** 2;

    if (z > mejorZ) {
      mejorZ = z;
      mejorX = x;
      mejorY = y;
    }
  }

  console.log(`Mejor x: ${mejorX.toFixed(2)}, Mejor y: ${mejorY.toFixed(2)}, Mejor Z: ${mejorZ.toFixed(2)}`);
}
