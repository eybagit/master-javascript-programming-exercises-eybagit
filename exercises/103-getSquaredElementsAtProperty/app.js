
const getSquaredElementsAtProperty = (objeto, llave) => !objeto.hasOwnProperty(llave) || !Array.isArray(objeto[llave]) || objeto[llave].length === 0 ? []
    : objeto[llave].map((elemento) => elemento *elemento);


let objeto1 = {
  llave1: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(objeto1, 'llave1');
console.log(output); // --> [4, 1, 25]
