// 367: Valid Perfect Square
// Tested successfully

num1 = 16
num2 = 14

function validPerfectSquare(num){
    numDigits = Math.floor(Math.log10(num)) + 1;
    numDigitsToStart = numDigits%2;
    startNum = Math.pow(10, numDigitsToStart);

    for (let i = startNum; i < Math.ceil(num/2); i++)
    {
        if (Math.pow(i, 2) == num) return true;
    }

    return false;
}

console.log(validPerfectSquare(10000));
console.log(validPerfectSquare(14));