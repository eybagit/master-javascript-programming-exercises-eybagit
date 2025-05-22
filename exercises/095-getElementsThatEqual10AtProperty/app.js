const getElementsThatEqual10AtProperty = (obj, key) => 
    !obj.hasOwnProperty(key) || !Array.isArray(obj[key])  ? [] 
    : obj[key].filter(element => element === 10);


let obj = {
  key: [1000, 10, 50, 10]
};

let output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]