const getLargestElementAtProperty = (objeto, llave) => !objeto.hasOwnProperty(llave) || !Array.isArray(objeto[llave]) || objeto[llave].length === 0 ? []
    : Math.max(...objeto[llave])


let objeto1 = {
  llave1: [1, 2, 4]
};

let salida = getLargestElementAtProperty(objeto1, 'llave1');
console.log(salida);
