function removeProperty(obj, key) {
  // your code here
    delete obj[key];
    return obj;
}
let casa = {
  color: 'azul',
  ventanas: 'Si',
  piso: 'Porcelanato'
}
//let CasasinColor = removeProperty(casa, 'piso');
//console.log(CasasinColor);

removeProperty(casa, 'ventanas');
console.log(casa);

//console.log(removeProperty(casa, 'piso'));
