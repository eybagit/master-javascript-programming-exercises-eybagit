const listAllValues = (objeto) => {
  const valores = [];
  for (let clave in objeto) {
    if (objeto.hasOwnProperty(clave)) {
      valores.push(objeto[clave]);
    }
  }
  return valores;
};

let output = listAllValues({ name: 'Sam', age: 25, hasPets: true });
console.log(output); // --> [ 'Sam', 25, true ]
