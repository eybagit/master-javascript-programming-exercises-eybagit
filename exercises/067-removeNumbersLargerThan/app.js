let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLargerThan(num, obj) {
  for (var key in obj) {
    if (typeof obj[key] === 'number' && obj[key] > num) {
      delete obj[key];
    }
  }
  return obj;
}

console.log(removeNumbersLargerThan(5, obj));

