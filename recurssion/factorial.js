const factorial = (num) => {
    let result;
    if (num == 0) {
        return 0;
    }
    else if (num == 1) {
        return 1;
    }
    else {
        result = num * factorial(num - 1);
    }
    return result;
}
console.log(factorial(4))