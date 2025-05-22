const getNthElementOfProperty = (obj, key, n) => obj?.[key]?.[n];


let obj = {
  key: [1, 2, 6]
};
let output = getNthElementOfProperty(obj, 'key', 2);
console.log(output); // --> 2