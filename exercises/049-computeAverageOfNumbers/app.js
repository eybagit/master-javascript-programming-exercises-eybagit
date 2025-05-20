// Write your function here
function computeAverageOfNumbers(numeros) {
  if (!Array.isArray(numeros) || numeros.length === 0) {
    return 0; // Retorna 0 si el array está vacío o no es un array
  }

  const sumatoria = numeros.reduce((acumulador, contador) => {
    return acumulador + contador;
  }, 0);

  return sumatoria / numeros.length;
}
console.log(computeAverageOfNumbers([10, 20, 50]));
