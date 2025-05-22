const getLengthOfShortestElement = (arreglo) => !arreglo || arreglo.length === 0 ? 0 //Mas compacto con If ternario
: Math.min(...arreglo.map(palabra => palabra.length));

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3

`Otra forma de hacerlo
const getLengthOfShortestElement = (arreglo) => {
  if (!arreglo || arreglo.length === 0) return 0; //con retornos, no finalizan los retornos hasta no terminar el arreglo
  return Math.min(...arreglo.map(palabra => palabra.length)); 
};`