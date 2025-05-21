function getAllWords(palabra) {
  if (palabra.length === 0) return []; // Manejo de string vacío
  return palabra.split(' ');
}

let output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
