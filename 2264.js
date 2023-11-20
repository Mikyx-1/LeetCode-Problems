// 2264. Largest 3-Same-Digit Number in String
// Tested successfully

let num1 = "6777133339";
let num2 = "2300019";
let num3 = "42352338";

function largest3SameDigitNumberInString(num)
{
    let max = -1;
    for (let i = 0; i < num.length-2; i++)
    {
        if(num[i]==num[i+1] && num[i+1] == num[i+2])
        {
            if (parseInt(num.slice(i, i+3)) > parseInt(max)) max = num.slice(i, i+3);
        }
    }
    if(max==-1) return "";
    return max;
}

console.log(largest3SameDigitNumberInString(num1));
console.log(largest3SameDigitNumberInString(num2));
console.log(largest3SameDigitNumberInString(num3));
