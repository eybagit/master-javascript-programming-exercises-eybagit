function addFullNameProperty(obj) {
  // Add your code after this line
  obj.fullName = obj.firstName + " " + obj.lastName;
  return obj
}

persona = {
  firstName: 'Carla',
  lastName: 'Amarela'
}

console.log(addFullNameProperty(persona));
//console.log(addFullNameProperty({ firstName: "Cielo", lastName: "Azul" }))