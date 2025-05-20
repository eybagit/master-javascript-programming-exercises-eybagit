function isEitherEvenOrAreBoth7(num1, num2) {
    if (!(num1 % 2 == 0 || num2 % 2 == 0 || num1 == 7 && num2 == 7)) {
        return false;
    } else return true;
}

console.log(isEitherEvenOrAreBoth7(7, 6));
