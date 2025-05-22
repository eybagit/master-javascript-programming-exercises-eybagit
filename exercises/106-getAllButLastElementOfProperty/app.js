const getAllButLastElementOfProperty = (objeto, llave) => !objeto.hasOwnProperty(llave) || !Array.isArray(objeto[llave]) || objeto[llave].length === 0 ? []
: objeto[llave].slice(0, -1);

let objeto1 = {
  llave1: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(objeto1, 'llave1');
console.log(output); // --> [1, 2]
