const squareElements = (arreglo) => 
  arreglo.map(numero => numero*numero);


let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
