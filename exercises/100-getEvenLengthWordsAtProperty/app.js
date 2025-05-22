const getEvenLengthWordsAtProperty = (objeto, llave) => !objeto.hasOwnProperty(llave) || !Array.isArray(objeto[llave]) ? [] 
: objeto[llave].filter((elemento) => elemento.length % 2 === 0 );


let objetillo = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(objetillo, 'key');
console.log(output); // --> ['long', 'game']
