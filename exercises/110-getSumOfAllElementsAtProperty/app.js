
const getSumOfAllElementsAtProperty = (objeto, llave) => 
  !objeto.hasOwnProperty(llave) || !Array.isArray(objeto[llave]) || objeto[llave].length === 0
  ? 0
  : objeto[llave].reduce((acumulador, valorActual) => acumulador + valorActual, 0);//El 0 es el numero neutro de la suma => acumulador = 0; inicia en 0.

let objeto1 = {
  llave1: [1, 2, 3, 4]
};
let output = getSumOfAllElementsAtProperty(objeto1, 'llave1');
console.log(output); // --> 10