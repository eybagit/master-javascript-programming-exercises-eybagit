
function computeSumBetween (numero1, numero2) {
  if (numero2 <= numero1) return 0; 
  
  let suma = 0;
  for (let i = numero1; i < numero2; i++) {
       suma += i;
  }
  return suma;
};

let output = computeSumBetween(2, 5);
console.log(output); // --> 9
