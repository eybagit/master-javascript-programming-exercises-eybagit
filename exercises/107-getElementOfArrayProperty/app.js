const getElementOfArrayProperty = (objeto, llave, indice) => (objeto.hasOwnProperty(llave) 
 && Array.isArray(objeto[llave])
 && objeto[llave].length > 0 
 && indice >= 0 
 && indice < objeto[llave].length)
 ? objeto[llave][indice]
: undefined;

let objeto1 = {
    llave1: ['Jamil', 'Albrey']
};
let output = getElementOfArrayProperty(objeto1, 'llave1', 0); 
console.log(output); // --> 'Jamil'
