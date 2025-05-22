const calculateBillTotal = Monto => Math.round((Monto * 1.245) * 100) / 100; 
`1.245 es 1 para sacar % multiplicando + 0.095(impuesto del 9.5%) + 0.15(15% de propina). 
Math.round para evitar decimales`
let output = calculateBillTotal(20);
console.log(output); // --> 24.9
