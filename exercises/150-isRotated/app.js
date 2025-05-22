const isRotated = (original, rotado) => {
  if (original.length !== rotado.length) return false;
  return (original + original).includes(rotado);
};
  
  console.log(isRotated('hello world', 'orldhello w')); // --> true
  console.log(isRotated('hello world', 'omrel wp')); // --> false
  
