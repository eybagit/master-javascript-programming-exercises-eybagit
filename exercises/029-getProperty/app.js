function getProperty(obj, key) {
  // your code here
  return obj[key];
};

const persona = {
  nombre: 'Elkin',
  edad: 26,
  ciudad: 'Medellin'
};

let output = getProperty(persona, 'ciudad');
console.log(output); // --> 'Toyota' */
console.log(getProperty(persona, 'edad'));
