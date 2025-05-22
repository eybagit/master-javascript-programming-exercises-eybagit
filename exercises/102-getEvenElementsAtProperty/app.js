const getEvenElementsAtProperty = (objeto, llave) => !objeto.hasOwnProperty(llave) || !Array.isArray(objeto[llave]) || objeto[llave].length === 0 ? []
    : objeto[llave].filter(elemento => elemento % 2 === 0);

let objeto1 = {
  llave1: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(objeto1, 'llave1');
console.log(output); // --> [1000, 50]
