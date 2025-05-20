function addArrayProperty(obj, key, arr) {
  // Add your code after this line
  obj[key]=arr;
  return obj;
}
//let arr = [];
carro={
  motor: "si",
  color: 'negro',
  cajaSecuencial: '1-5'
}
console.log(addArrayProperty(carro, 'cajaSecuencial', [1, 2, 3, 4, 'reversa', 4.5]));
