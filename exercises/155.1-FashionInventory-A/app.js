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

function renderInventory(inventarioActual) {
  let listaZapatos = [];

  for (let diseniador of inventarioActual) {
    for (let zapato of diseniador.shoes) {
      listaZapatos.push([diseniador.name, zapato.name, zapato.price]);
    }
  }

  return listaZapatos;
}

console.log(renderInventory(currentInventory))
