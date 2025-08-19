function runProgram(input) {
    const expr = input.trim();
    let result = '';
    let stack = [];

    // Operator precedence
    function precedence(op) {
        if (op === '^') return 3;
        if (op === '*' || op === '/') return 2;
        if (op === '+' || op === '-') return 1;
        return 0;
    }

    // Associativity // Only ^ is right
    function rightAssociative(op) {
        return op === '^';
    }

    for (let i = 0; i < expr.length; i++) {
        const ch = expr[i];
        if (/[a-zA-Z]/.test(ch)) {
            // Operand => directly to output
            result += ch;
        } else if (ch === '(') {
            stack.push(ch);
        } else if (ch === ')') {
            // Pop till '(' is found
            while (stack.length && stack[stack.length - 1] !== '(') {
                result += stack.pop();
            }
            stack.pop(); // pop '('
        } else if ('+-*/^'.includes(ch)) { // operator
            while (
                stack.length &&
                stack[stack.length - 1] !== '(' &&
                (
                    precedence(stack[stack.length - 1]) > precedence(ch) ||
                    (
                        precedence(stack[stack.length - 1]) === precedence(ch) &&
                        !rightAssociative(ch)
                    )
                )
            ) {
                result += stack.pop();
            }
            stack.push(ch);
        }
    }
    // Pop bache hue operators
    while (stack.length) {
        result += stack.pop();
    }
    console.log(result);
}

// Example Test (for your sample input)
runProgram("a+b-c+d*(e-f)/g+(h*(i/j))"); // Output: ab-c+def-*g/+hij/*+
