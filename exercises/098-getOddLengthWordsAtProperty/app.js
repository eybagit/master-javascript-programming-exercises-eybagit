const getOddLengthWordsAtProperty = (objeto, llave) => !objeto.hasOwnProperty(llave) || !Array.isArray(objeto[llave]) ? [] 
: objeto[llave].filter((elemento) => elemento.length % 2 === 1 );

let palabras = {
  llave1: ['Eso', 'Tiene', 'Algunas', 'Palabras']
};

let output = getOddLengthWordsAtProperty(palabras, 'llave1');
console.log(output); 