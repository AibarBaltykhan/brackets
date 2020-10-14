module.exports = function check(str, bracketsConfig) {
    if (str.length <= 1) {
        return false;
    }
    let matchingOpeningBracket, ch;
    let stack = [];
    let openingBrackets = [];
    let closingBrackets = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        openingBrackets.push(bracketsConfig[i][0]);
        closingBrackets.push(bracketsConfig[i][1]);
    }
    for (let i = 0; i < str.length; i++) {
        ch = str[i];
        if (closingBrackets.indexOf(ch) > -1) {
            matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)];

            if (matchingOpeningBracket != ch) {
                if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
                    return false;
                }
            } else {
                if (stack[stack.length-1] === matchingOpeningBracket) {
                    stack.pop();
                } else {
                    stack.push(ch);
                }
            }
        } else {
            stack.push(ch);
        }
    }
    if (stack.length == 0) {
        return true;
    } else {
        return false;
    }
}
