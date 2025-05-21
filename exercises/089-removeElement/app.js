const removeElement = (arreglo, eliminar) =>{
    return arreglo.filter((elemento) => elemento !== eliminar);
}

console.log(removeElement([1, 2, 9, 3, 4, 9, 5, 9, 6, 7, 9, 8], 9));


