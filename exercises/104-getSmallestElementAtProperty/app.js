
const getSmallestElementAtProperty = (objeto, llave) => !objeto.hasOwnProperty(llave) || !Array.isArray(objeto[llave]) || objeto[llave].length === 0 ? []
    : Math.min(...objeto[llave])


let objeto1 = {
  llave1: [2, 1, 5]
};

console.log(getSmallestElementAtProperty(objeto1, 'llave1'));

