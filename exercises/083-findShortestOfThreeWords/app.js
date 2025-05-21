const findShortestOfThreeWords = (palabra1, palabra2, palabra3) => 
    [palabra1, palabra2, palabra3].reduce((masCortaAhora, palabraActual) => 
        palabraActual.length < masCortaAhora.length ? palabraActual: masCortaAhora 
);

let output = findShortestOfThreeWords('Palabras largas', 'Palabra Media', 'Corta');
console.log(output); // --> 'a'
