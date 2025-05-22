const fromListToObject = (matriz) => 
  matriz.reduce((objeto, [clave, valor]) => ({ ...objeto, [clave]: valor }), {});// Convertimos elementos en claves con []

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // --> { make: 'Ford', model: 'Mustang', year: 1964 }
