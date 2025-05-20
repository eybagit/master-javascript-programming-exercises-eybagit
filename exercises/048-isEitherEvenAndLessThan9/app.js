function isEitherEvenAndLessThan9(num1, num2) {
    if((num1 % 2 == 0 || num2 % 2 == 0 ) && ( num1 < 9 && num2 < 9)){
        return true;
    } else return false;
}

console.log(isEitherEvenAndLessThan9(2, 2));
