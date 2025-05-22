const getElementsGreaterThan10AtProperty = (objeto, llave) => !objeto.hasOwnProperty(llave) || !Array.isArray(objeto[llave]) ? []
: objeto[llave].filter((elemento) => elemento > 10 );

let carrusel = {
  puestos: [1, 20, 30]
};
let output = getElementsGreaterThan10AtProperty(carrusel, 'puestos');
console.log(output); // --> [20, 30]