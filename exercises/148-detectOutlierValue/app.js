const detectOutlierValue = (cadenaNumeros) => {
  const numeros = cadenaNumeros.split(' ').map(numero => Number(numero));
  const esPar = numero => numero % 2 === 0;
  
  const pares = numeros.filter(esPar);
  const impares = numeros.filter(numero => !esPar(numero));
  
  const buscarPar = pares.length === 1;
  const numeroBuscado = buscarPar ? pares[0] : impares[0];
  
  return numeros.findIndex(numero => numero === numeroBuscado) + 1;
};//Detecta el par solo o el impar solo.

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // --> 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  // --> 2
