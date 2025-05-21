const removeFromFrontOfNew = (arreglo) => arreglo.slice(1);
    // your code here

let arr = [1, 2, 3];
let arr1 = removeFromFrontOfNew(arr);
console.log(arr1); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]
