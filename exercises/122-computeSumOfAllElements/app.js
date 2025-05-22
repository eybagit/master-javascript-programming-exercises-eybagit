const computeSumOfAllElements = (arreglo) => arreglo.length === 0 
? 0
: arreglo.reduce((acumulador, valorActual) => acumulador + valorActual, 0);

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
