function getLastElementOfProperty(obj, key) {
    // Verifica que la propiedad exista, sea un array y no esté vacía
    if (!obj.hasOwnProperty(key)) return undefined;
     const array = obj[key];
    if (!Array.isArray(obj[key])) return undefined;
    if (obj[key].length === 0) return undefined;
    
    return array[[obj[key].length - 1]]; // Retorna el último elemento
    //Tambien puede ser: return obj[key].at(-1); // -1 = último elemento
}

let obj = {
  key: [1, 2, 5]
};
let output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5