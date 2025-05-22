const getStringLength = (string) => {
  let contador = 0;
  while (string.substring(contador, contador + 1) !== '') {
    contador++;
  }
  return contador;
};

let output = getStringLength('hello');
console.log(output); // --> 5
