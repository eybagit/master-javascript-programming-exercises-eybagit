const computeFactorialOfN = numero => 
  numero <= 1 ? 1 : numero * computeFactorialOfN(numero - 1);//Factorial con recursividad

let output = computeFactorialOfN(4);
console.log(output); // --> 24
