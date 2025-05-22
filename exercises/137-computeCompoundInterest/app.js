const computeCompoundInterest = (monto, tasa, frecuencia, años) => 
  monto * (1 + tasa / frecuencia) ** (frecuencia * años) - monto;// **Calculo de potencias

let output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.83682213410543
