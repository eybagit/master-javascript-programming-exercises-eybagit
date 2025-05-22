const findSmallestElement = (arreglo) => !arreglo || arreglo.length === 0 ? 0
    : arreglo.reduce((numero1, numero2) => numero1 < numero2 ? numero1 : numero2);



let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1