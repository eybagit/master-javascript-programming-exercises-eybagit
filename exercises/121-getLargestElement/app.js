const getLargestElement = arreglo => arreglo?.length 
? Math.max(...arreglo) 
: 0;

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;