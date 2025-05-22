const findPairForSum = (numeros, sumaDeseada) => {
  for (const [indice, numeroActual] of numeros.entries()) {
    const numeroEncontrado = numeros
      .slice(indice + 1)
      .find(numero => numero === sumaDeseada - numeroActual);
    
    if (numeroEncontrado) return [numeroActual, numeroEncontrado];
  }
  return [];
};

let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
