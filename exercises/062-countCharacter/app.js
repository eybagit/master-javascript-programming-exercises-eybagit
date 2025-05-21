function countCharacter(palabra, caracterBuscado) {
  return [...palabra].filter(caracter => caracter.toLowerCase() === caracterBuscado.toLowerCase()).length;
}

//let output = countCharacter('I am a hacker', 'a');
//console.log(`La palabra tiene ${output} A`); // --> 3
//console.log(`El resultado es: ${(() => countCharacter('I am a hacker', 'a'))()}`);
console.log(`El resultado es: ${countCharacter('I am a hacker', 'a')}`);