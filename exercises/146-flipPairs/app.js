const flipPairs = (texto) => {
  let resultado = '';
  for (let i = 0; i < texto.length; i += 2) {
    const primerCaracter = texto[i];
    const segundoCaracter = texto[i + 1] || ''; // Si no hay segundo carácter, usa cadena vacía
    resultado += segundoCaracter + primerCaracter;
  }
  return resultado;
};

let input = "Can you see what this is about?";
let output = flipPairs(input);
console.log(output); // --> aC noy ues ehwtat ih ssia obtu?
