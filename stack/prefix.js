/**
 * @param {string[]} tokens
 * @return {parseInt}
 */
var evalRPN = function (tokens) {
    const arr = [];
    let result = 0;
    // ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]

    for (i = 0; i < tokens.length; i++) {
        if (tokens[i] == "*" || tokens[i] == "-" || tokens[i] == "/" || tokens[i] == "+") {

            let var1 = arr.pop();
            let var2 = arr.pop();
            switch (tokens[i]) {
                case "*":
                    result = parseInt(var2) * parseInt(var1);
                    arr.push(result);
                    break;
                case "-":
                    result = parseInt(var2) - parseInt(var1)
                    arr.push(result);
                    break;
                case "+":
                    result = parseInt(var2) + parseInt(var1);
                    arr.push(result);
                    break;
                case "/":
                    result = parseInt(var2) / parseInt(var1);
                    arr.push(result);
                    break;
                default:
                    console.log("wtf");

            }

        }
        else {
            arr.push(parseInt(tokens[i]));
        }

    }
    return result;
};

console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));