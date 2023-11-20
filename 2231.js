// 2231. Largest Number After Digit Swaps By Parity
// Tested successfully

let num1 = 1234, num2 = 65875;

function largestNumberAfterDigitSwaps(num)
{
    let string = num.toString();
    let oddString = [];
    let evenString = [];
    let oddLength = 0;
    for (let i = 0; i < string.length; i++)
    {
        if(i%2==0) evenString.push(string[i]);
        else {
            oddString.push(string[i]);
            oddLength++;
        }
    }

    oddString.sort((a, b) => (b-a));
    evenString.sort((a, b) => (b-a));
    let res = "";
    for (let i = 0 ; i < evenString.length; i++)
    {
        res += evenString[i];
        if(i < oddString.length) res += oddString[i];
    }
    return parseInt(res);
}

console.log(largestNumberAfterDigitSwaps(num1));
console.log(largestNumberAfterDigitSwaps(num2));