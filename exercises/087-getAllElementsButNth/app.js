const getAllElementsButNth = (arreglo, paFuera) =>{
   return arreglo.filter((elemento, indice) => indice !== paFuera);
}
//indice !== paFuera - Solo agrega al arreglo los elementos distintos al indice paFuera
let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
