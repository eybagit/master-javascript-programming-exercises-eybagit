const getProductOfAllElementsAtProperty = (objeto, llave) => 
  !objeto.hasOwnProperty(llave) || !Array.isArray(objeto[llave]) || objeto[llave].length === 0
  ? 0
  : objeto[llave].reduce((acumulador, valorActual) => acumulador * valorActual, 1);//El 1 es el numero neutro de la multiplicacion => acumulador = 1; inicia en 1.

let objeto1 = {
  llave1: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(objeto1, 'llave1');
console.log(output); // --> 24
