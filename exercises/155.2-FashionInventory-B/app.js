let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 },
    ],
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 },
    ],
  },
];

function renderAverageCostPerDesigner(inventarioActual) {
  let promediosPorDiseniador = [];

  for (let diseniador of inventarioActual) {
    let sumaPrecios = 0;
    let cantidadZapatos = diseniador.shoes.length;

    for (let zapato of diseniador.shoes) {
      sumaPrecios += zapato.price;
    }

    let precioPromedio = sumaPrecios / cantidadZapatos;

    promediosPorDiseniador.push({
      name: diseniador.name,
      averagePrice: precioPromedio
    });
  }

  return promediosPorDiseniador;
}

console.log(renderAverageCostPerDesigner(currentInventory));
