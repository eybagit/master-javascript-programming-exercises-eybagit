const getElementsUpTo = (arreglo, indice) => {
  return arreglo.slice(0, indice)
  
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
