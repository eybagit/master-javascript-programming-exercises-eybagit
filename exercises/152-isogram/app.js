const isIsogram = (palabra) => {
  const letras = palabra.toLowerCase().split('');
  return new Set(letras).size === letras.length;
};
`Set elimina duplicados automaticamente y compara con el tamaño del original
 si son distinto no es un isograma`

console.log(isIsogram("Camile")); // --> true
console.log(isIsogram("Camille")); // --> false
