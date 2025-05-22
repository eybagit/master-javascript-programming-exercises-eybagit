const countAllCharacters = (string) => 
  [...string].reduce((contador, caracter) => ({
    ...contador,
    [caracter]: (contador[caracter] || 0) + 1 // equivalente a => [caracter]: (contador[caracter] ?? 0) + 1
  }), {});// {} Inicializa el acumulador

// Ejemplo de uso:
let output = countAllCharacters('banana');
console.log(output); // { b: 1, a: 3, n: 2 }