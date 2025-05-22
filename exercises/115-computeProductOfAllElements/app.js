const computeProductOfAllElements = (arreglo) => !arreglo || arreglo.length === 0 ? 0
  : arreglo.reduce((acumulador, valorActual) => acumulador*valorActual, 1);
  // your code here
  


let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
