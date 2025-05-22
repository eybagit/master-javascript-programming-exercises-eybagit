const findSmallestNumberAmongMixedElements = (arreglo) => 
  (arreglo?.filter(numero => typeof numero === 'number') || [])
.reduce((numero1, numero2) => (numero1 === 0 || numero2 < numero1) ? numero2 : numero1, 0);

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
