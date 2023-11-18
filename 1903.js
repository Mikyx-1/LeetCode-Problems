// 1903. Largest Odd Number in String
// Tested successfully

let num1 = "52", num2 = "4206", num3 = "35427";

function largestOddNumberInString(num)
{
    let lastIdx = num.length-1;
    for(let i = lastIdx; i > -1; i--)
    {
        if(parseInt(num[i])%2==1) return num.slice(0, i+1);
    }
    return "";
}

console.log(largestOddNumberInString(num1));
console.log(largestOddNumberInString(num2));
console.log(largestOddNumberInString(num3));