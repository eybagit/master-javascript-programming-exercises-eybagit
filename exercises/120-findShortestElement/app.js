const  findShortestElement = (arreglo) => !arreglo || arreglo.length === 0 ? '' 
    : arreglo.reduce((palabra1, palabra2) => palabra1.length <= palabra2.length ? palabra1 : palabra2);


let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'