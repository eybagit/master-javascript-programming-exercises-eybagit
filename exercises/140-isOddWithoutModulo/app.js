const isOddWithoutModulo = (numero) => {
  if (!Number.isInteger(numero)) return false;
  return (numero / 2) !== Math.trunc(numero / 2);// Math.trunc elimina decimales: Si son iguales las salidas el numero es par si son distintos es impar.
};

let output = isOddWithoutModulo(17);
console.log(output); // --> true
