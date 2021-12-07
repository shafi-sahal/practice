const evaluatePostfix = (expression, substitutes) => {
    let stack = [];
    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];

        if (!isNaN(parseInt(char))) {
            stack.push(parseInt(char));
        } else if (/[A-Za-z]/.test(char)) {
            char = substitutes[char];
            stack.push(parseInt(char));
        } else {
            let num1 = stack.pop();
            let num2 = stack.pop();

            switch(char) {
                case '+':
                    stack.push(num2 + num1);
                    break;
                case  '-':
                    stack.push(num2 - num1);
                    break;
                case '*':
                    stack.push(num2 * num1);
                    break;
                case '/':
                    stack.push(num2 / num1);
                    break;
            }
        }
    }
    return stack.pop();
}
console.log(evaluatePostfix("x4*y5*+", {x : 3, y : 2}));
