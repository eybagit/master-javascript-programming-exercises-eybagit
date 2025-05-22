const findShortestWordAmongMixedElements = (arreglo) => (arreglo?.filter(palabra => typeof palabra === 'string') || [])
    .reduce((palabra1, palabra2) => (palabra1 === '' || palabra2.length < palabra1.length) ? palabra2 : palabra1, '');

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
