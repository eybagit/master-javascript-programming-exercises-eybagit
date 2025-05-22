const sum = arreglo => arreglo.reduce((numero1, numero2) => numero1 + numero2, 0);

const average = numeros => numeros.length ? sum(numeros) / numeros.length : 0;

console.log(average([1, 2])); // --> 1.5
