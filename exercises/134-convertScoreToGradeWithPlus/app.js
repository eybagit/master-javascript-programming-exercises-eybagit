const convertScoreToGradeWithPlusAndMinus = (puntaje) => {
  if (puntaje > 100 || puntaje < 0) return 'INVALID SCORE';
  
  let grado;
  const ultimoDigito = puntaje % 10;

  // Asignar la letra base
  if (puntaje >= 90) grado = 'A';
  else if (puntaje >= 80) grado = 'B';
  else if (puntaje >= 70) grado = 'C';
  else if (puntaje >= 60) grado = 'D';
  else return 'F'; // F no tiene + ni -

  // Determinar el signo
  if (puntaje === 100) return 'A+'; // Caso especial para 100
  if (ultimoDigito >= 8) return grado + '+';
  if (ultimoDigito <= 2) return grado + '-';
  
  return grado;
};

let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
