const sumDigits = (numero) => 
    [...Math.abs(numero).toString()]
    .reduce((suma, numero1, indice) => suma + (Number(numero1) * (indice === 0 && numero < 0 ? -1 : 1)), 0);

let output = sumDigits(-316);
console.log(output); // --> 4
