const getLengthOfLongestElement = (arreglo) => 
  Math.max(...arreglo.map(palabra => palabra*palabra), 0);

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
