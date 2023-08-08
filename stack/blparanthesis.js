const recurssive = (num, result, close, open, current) => {

    if (current.length == num * 2) {
        result.push(current);
        return;
    }
    if (close < open) {
        recurssive(num, result, close + 1, open, current + ')');
    }
    if (open < num) {
        recurssive(num, result, close, open + 1, current + '(');
    }
    return result;
}
const result = [];
console.log(recurssive(4, result, 0, 0, ''));