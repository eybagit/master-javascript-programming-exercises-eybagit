function multiplyBetween (numero1, numero2) {
  if (numero2 <= numero1) return 0; 
  
  let producto = 1;
  for (let i = numero1; i < numero2; i++) {
       producto *= i;
  }
  return producto;
};

let output = multiplyBetween(1, 5);
console.log(output); // --> 24
