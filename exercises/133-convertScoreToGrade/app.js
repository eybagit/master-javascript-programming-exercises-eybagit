const convertScoreToGrade = (nota) => {
  if (nota > 100 || nota < 0) return 'INVALID SCORE';
  
  if (nota >= 90) return 'A';
  if (nota >= 80) return 'B';
  if (nota >= 70) return 'C';
  if (nota >= 60) return 'D';
  return 'F';
};
let output = convertScoreToGrade(91);
console.log(output); // --> 'A'
