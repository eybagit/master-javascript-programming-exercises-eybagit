function removeOddValues(obj) {
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'number' && Math.abs(obj[key] % 2) === 1) {
      delete obj[key];
    }
  });
}

let obj = {
  a: 2,
  b: 3,
  c: 4
};
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }
