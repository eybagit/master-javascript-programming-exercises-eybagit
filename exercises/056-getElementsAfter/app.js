const getElementsAfter = (arreglo, indice) => {
 return arreglo.slice(indice + 1);
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
