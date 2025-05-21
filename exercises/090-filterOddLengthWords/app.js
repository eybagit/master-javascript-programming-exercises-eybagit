const filterOddLengthWords = (arregloPalabras) => arregloPalabras.filter((elemento) => elemento.length % 2 !== 0);
//toma las palabras impares
       

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', 'now']
