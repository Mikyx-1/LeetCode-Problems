// 2160. Minimum Sum of 4-Digit Number After Splitting Digits
// Tested successfully

let num1 = 2932, num2 = 4009;



function minimumDigitsSum(num)
{
    let numList = num.toString().split("").map(Number).sort().map(String);
    return eval(numList[0] + numList[2]) + eval(numList[1] + numList[3]);
}

console.log(minimumDigitsSum(num1));
console.log(minimumDigitsSum(num2));
