function removeArrayValues(obj) {
    // your code here
    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            delete obj[key];
        }
    }
    return obj;
}

let objeto = {
  a: [1, 3, 4],
  b: 2,
  c: ['Hola', 'Alla']
}

console.log(removeArrayValues(objeto));
