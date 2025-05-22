const getAllKeys = (objeto) => {
  const claves = [];
  for (let clave in objeto) {
    if (objeto.hasOwnProperty(clave)) {
      claves.push(clave);
    }
  }
  return claves;
};

let output = getAllKeys({name: "Sam", age: 25, hasPets: true});
console.log(output); // --> [ 'name', 'age', 'hasPets' ]
//Llave: Nombre de la propiedad del objeto / Clave: Dato dentro de la llave