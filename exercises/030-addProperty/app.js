function addProperty(obj, key) {
 obj[key] = true;
  // your code here
  return obj;
}

const persona = {
  nombre: 'Hector',
  edad: '15',
  ciudad: 'Alaska'
}

console.log(addProperty(persona, 'acierto'));
