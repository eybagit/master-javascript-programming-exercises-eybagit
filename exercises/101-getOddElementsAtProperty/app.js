const getOddElementsAtProperty = (objeto, llave) => !objeto.hasOwnProperty(llave) || !Array.isArray(objeto[llave]) || objeto[llave].length === 0 ? []
    : objeto[llave].filter(elemento => elemento % 2 !== 0);

let objeto1 = {
  llave1: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(objeto1, 'llave1');
console.log(output); // --> [1, 3, 5]
