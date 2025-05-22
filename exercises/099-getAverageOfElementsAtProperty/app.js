const getAverageOfElementsAtProperty = (objeto, llave) => 
  (!objeto[llave] || !Array.isArray(objeto[llave]) || objeto[llave].length === 0)
    ? 0
    : objeto[llave].reduce((acumulador, valorActual) => acumulador + valorActual, 0) / objeto[llave].length;

let obj = {
  key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2
