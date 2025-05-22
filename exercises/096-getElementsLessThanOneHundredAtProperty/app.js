// Write your function here
const getElementsLessThan100AtProperty = (objeto, key) => !objeto.hasOwnProperty(key) || !Array.isArray(objeto[key]) ? [] 
: objeto[key].filter((elemento) => elemento < 100);

let persona = {
  key: [1000, 20, 50, 500]
};
let output = getElementsLessThan100AtProperty(persona, 'key');
console.log(output); // --> [20, 50]