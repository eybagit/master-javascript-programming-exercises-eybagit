const getLargestNumberAmongMixedElements = (arreglo) => 
  (arreglo?.filter(numero => typeof numero === 'number') || [])
.reduce((numero1, numero2) => (numero1 === 0 || numero1 < numero2) ? numero2 : numero1, 0);



let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
