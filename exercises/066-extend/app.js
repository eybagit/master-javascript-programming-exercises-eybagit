 let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
  for (let key in obj2) {
// Deja ambos objetos exactamente iguales agregando los que no estan al obj1
    if (!obj1.hasOwnProperty(key)) {
      obj1[key] = obj2[key];
    }
  }
  return obj1;
}

console.log(extend(obj1, obj2));
