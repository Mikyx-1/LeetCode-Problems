// 2710. Remove trailing zeros from a string
// Tested successfully

let num1 = "51230100", num2 = "123";

function removeTrailingZeros(num)
{
    let length = num.length;
    for (let i = length-1; i>-1; i--)
    {
        if (parseInt(num[i]) != 0) return num.slice(0, i+1);
    }
    return "";
}

console.log(removeTrailingZeros(num1));
console.log(removeTrailingZeros(num2));
