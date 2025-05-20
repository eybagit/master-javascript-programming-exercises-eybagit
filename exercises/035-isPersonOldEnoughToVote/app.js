function isPersonOldEnoughToVote(person) {
  if (person.age >= 18){ 
    return true;
  } else return false
}

person= {
  age: '17'
}
console.log(isPersonOldEnoughToVote(person));
