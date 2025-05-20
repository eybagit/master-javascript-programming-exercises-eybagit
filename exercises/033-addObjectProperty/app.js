function addObjectProperty(obj1, key, obj2) {
  // Add your code after this line
  obj1[key] = obj2;
  return obj1
}
persona1 = {
  nombre: 'Gavirio',
  rol: 'Medico'
}

persona2 = {
  nombre: 'Pernario',
  rol: 'Comerciante'
}

addObjectProperty(persona1, 'rol', persona2);
console.log(persona1.rol);


