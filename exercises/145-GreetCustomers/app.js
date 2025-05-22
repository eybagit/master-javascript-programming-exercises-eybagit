const greetCustomer = (nombre) => {
  const cliente = customerData[nombre];
  
  if (!cliente) {
    return 'Welcome! Is this your first time?';
  }
  
  if (cliente.visitas === 1) {
    return `Welcome back, ${nombre}! We\'re glad you liked us the first time!`;
  }
  
  return `Welcome back, ${nombre}! So glad to see you again!`;
};

const customerData = {
  Joe: { visitas: 1 },
  Carol: { visitas: 2 },
  Howard: { visitas: 3 },
  Carrie: { visitas: 4 }
};

console.log(greetCustomer('Joe')); // --> Bienvenido de nuevo, Joe! ¡Nos alegra que te hayamos gustado la primera vez!
