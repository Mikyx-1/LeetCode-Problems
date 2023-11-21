// 2259. Remove Digit From Number To Maximize Result
// Tested successfully

// O(n)

let number1 = "123", digit1 = "3";
let number2 = "231", digit2 = "1";
let number3 = "651", digit3 = "5";


function removeDigitFromNumberToMaximizeResult(number, digit)
{

    let firstSolution = null;
    let length = number.length;

    for (let i = 0; i < length; i++)
    {
        if(number[i] == digit)
        {
            if(i < length-1 && number[i] <= number[i+1]) return number.slice(0, i) + number.slice(i+1, );
            
        }
    }
    if(number[length-1] == digit) return number.slice(0, -1);
    return number;
}

console.log(removeDigitFromNumberToMaximizeResult(number1, digit1));
console.log(removeDigitFromNumberToMaximizeResult(number2, digit2));
console.log(removeDigitFromNumberToMaximizeResult(number3, digit3));