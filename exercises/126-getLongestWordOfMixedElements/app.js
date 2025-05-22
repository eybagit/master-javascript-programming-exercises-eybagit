const getLongestWordOfMixedElements = (arreglo) => (arreglo?.filter(palabra => typeof palabra === 'string') || [])
    .reduce((palabra1, palabra2) => (palabra1 === '' || palabra1.length < palabra2.length) ? palabra2 : palabra1, '');


let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
