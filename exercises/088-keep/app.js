// Write your function here
const keep = (arreglo, mantener) =>{
   return arreglo.filter((elemento) => elemento === mantener);
}

console.log(keep([2, 1, 5, 4, 6, 2, 2], 2));

