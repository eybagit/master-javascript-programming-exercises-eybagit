const search = (lista, objetivo) => {
  let izquierda = 0;
  let derecha = lista.length - 1;

  while (izquierda <= derecha) {
    const centro = Math.floor((izquierda + derecha) / 2);
    if (lista[centro] === objetivo) return centro;
    lista[centro] < objetivo ? izquierda = centro + 1 : derecha = centro - 1;
  }

  return null;
};

let arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 31)); // --> 4
