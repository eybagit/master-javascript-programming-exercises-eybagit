const transformEmployeeData = (listaEmpleados) =>
  listaEmpleados.map(empleado => 
    empleado.reduce((objeto, [clave, valor]) => ({ ...objeto, [clave]: valor }), {})
  );

  let output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']], [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output); // --> [{ firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' }, { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }]
