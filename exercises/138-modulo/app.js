const modulo = (dividendo, divisor) => {
  // Casos especiales
  if (isNaN(dividendo) || isNaN(divisor)) return NaN;
  if (divisor === 0) return NaN;
  if (dividendo === 0) return 0;


  const cociente = Math.trunc(dividendo / divisor);//Math.trunc elimina decimales
  const resto = dividendo - (cociente * divisor);

  // Asegura que el resto tenga el mismo signo que el dividendo
  return resto === 0 ? 0 : Math.sign(dividendo) * Math.abs(resto);
};

let output = modulo(25, 4);
console.log(output); // --> 1
