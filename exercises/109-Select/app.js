const select = (arreglo, objeto) => 
  arreglo.reduce((acumulador, llave) => 
    objeto.hasOwnProperty(llave) 
    ? {...acumulador, [llave]: objeto[llave]} 
    : acumulador
  , {});

let arreglo1 = ['a', 'c', 'e'];
let objeto1 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

let output = select(arreglo1, objeto1); //Toma los similares y los retorna entre el arreglo y el objeto
console.log(output); // --> { a: 1, c: 3 }