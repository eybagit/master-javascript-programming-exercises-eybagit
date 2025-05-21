const addToFront = (arreglo, item) => {
  arreglo?.unshift(item);  
  return arreglo;
};

let output = addToFront([1, 2], 0);
console.log(output); // -> [3, 1, 2]
