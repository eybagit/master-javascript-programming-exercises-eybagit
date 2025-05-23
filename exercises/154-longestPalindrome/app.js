function findLongestPalindrome(frase) {
  let palindromoMasLargo = '';

  for (let i = 0; i < frase.length; i++) {
    let palabraActual = '';
    for (let j = i; j < frase.length; j++) {
      palabraActual += frase[j];
      if (isPalindrome(palabraActual) && palabraActual.length > palindromoMasLargo.length) {
        palindromoMasLargo = palabraActual;
      }
    }
  }

  return palindromoMasLargo;
}

function reverseString(cadena) {
  return cadena.split('').reverse().join('');
}

function isPalindrome(palabra) {
  return palabra.length > 1 && palabra.toLowerCase() === reverseString(palabra.toLowerCase());
}

const resultado = findLongestPalindrome("My dad is a racecar athlete");
console.log(resultado); // --> "a racecar a"

function isPalindrome(word) {
  // your code here
  return word.length > 1 && word.toLowerCase() === reverseString(word.toLowerCase());
}

let output = findLongestPalindrome("My dad is a racecar athlete");
console.log(output); // --> "a racecar a"
