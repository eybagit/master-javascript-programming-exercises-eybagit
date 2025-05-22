
function  computeSummationToN (numero) {

  let suma = 0;
  for (let i = 0; i <= numero; i++) {
       suma += i;
  }
  return suma;
};

let output = computeSummationToN(6);
console.log(output); // --> 21

