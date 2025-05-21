const getLongestOfThreeWords = (palabra1, palabra2, palabra3) => 
    [palabra1, palabra2, palabra3].reduce((masLargaAhora, palabraActual) => 
        palabraActual.length > masLargaAhora.length ? palabraActual: masLargaAhora 
);
let output = getLongestOfThreeWords('Palabra1', 'Palabra2', 'EstaEsLaPalabraMasLarga');
console.log(output); // --> 'these'
