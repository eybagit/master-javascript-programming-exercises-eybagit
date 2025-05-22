const multiply = (a, b) => b === 0 ? 0 : 
  b > 0 ? a + multiply(a, b - 1) : 
  -a + multiply(a, b + 1); //Llamadas recursivas

let output = multiply(4, 7);
console.log(output); // --> 28
