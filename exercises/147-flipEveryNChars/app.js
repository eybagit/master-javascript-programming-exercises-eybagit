const flipEveryNChars = (cadena, tamanoGrupo) => {
  let cadenaFinal = '';
  for (let posicion = 0; posicion < cadena.length; posicion += tamanoGrupo) {
    const trozo = cadena.slice(posicion, posicion + tamanoGrupo);
    cadenaFinal += trozo.split('').reverse().join('');
  }
  return cadenaFinal;
};

let input = 'a short example';
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma
