const transformFirstAndLast = (arreglo) =>
   ({ [arreglo[0]]: arreglo[arreglo.length - 1] });//[arreglo[0]] vuelve el elemento de la posicion una llave
  
let arreglo1 = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
console.log(transformFirstAndLast(arreglo1)); // --> { Queen: "Beyonce" }
