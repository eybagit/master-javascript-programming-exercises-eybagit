function isPersonOldEnoughToDrive(person) {
  if (person.age >= 16){ 
    return true;
  } else return false
}

person= {
  age: '16'
}
console.log(isPersonOldEnoughToDrive(person));
