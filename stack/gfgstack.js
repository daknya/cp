// Performs Postfix Evaluation on a given exp
function postFixEvaluation(exp) {
    var stack = [];
    for (var i = 0; i < exp.length; i++) {
        var c = exp[i];
        if (!isNaN(c))
            stack.push(c - '0');
        else {
            var val1 = stack.pop();
            var val2 = stack.pop();
            if (val1 == "Underflow" || val2 == "Underflow")
                return "Can't perform postfix evaluation";
            switch (c) {
                case '+':
                    stack.push(val2 + val1);
                    break;

                case '-':
                    stack.push(val2 - val1);
                    break;

                case '/':
                    stack.push(val2 / val1);
                    break;

                case '*':
                    stack.push(val2 * val1);
                    break;
            }
        }
    }

    return stack.pop();
}

console.log(postFixEvaluation(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))