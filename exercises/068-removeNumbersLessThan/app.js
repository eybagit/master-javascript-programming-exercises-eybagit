let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLessThan(num, obj) {
  for (var key in obj) {
    if (typeof obj[key] === 'number' && obj[key] < num) {
      delete obj[key];
    }
  }
  return obj;
}

console.log(removeNumbersLessThan(5, obj));

