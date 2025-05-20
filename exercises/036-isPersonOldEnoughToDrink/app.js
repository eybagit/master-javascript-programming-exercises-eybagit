
function isPersonOldEnoughToDrink(person) {
  if (person.age >= 21){ 
    return true;
  } else return false
}

person= {
  age: '21'
}
console.log(isPersonOldEnoughToDrink(person));
