let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 }
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 }
    ]
  }
];

function getLaceNameDataForShoes(inventario) {
  let zapatosConLace = [];

  for (let diseniador of inventario) {
    for (let zapato of diseniador.shoes) {
      let palabras = zapato.name.split(' ');
      let indicePalabra = -1;
      
      // Buscamos palabras que contengan 'lace' o 'laced'
      for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].includes('lace') || palabras[i].includes('laced')) {
          indicePalabra = i;
          break;
        }
      }

      if (indicePalabra !== -1) {
        zapatosConLace.push({
          nameWords: palabras,
          targetWordIndex: indicePalabra
        });
      }
    }
  }

  return zapatosConLace;
}

console.log(getLaceNameDataForShoes(currentInventory));

//Realizados