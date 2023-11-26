// 2094. Finding 3-Digit Even Numbers
// Tested successfully

let digits1 = [2, 1, 3, 0], digits2 = [2, 2, 8, 8, 2], digits3 = [3, 7, 5];


function finding3DigitEvenNumbers(digits)
{
    let ans = new Set();
    for (let i = 0; i < digits.length; i++)
    {
        for (let j = 0; j < digits.length; j++)
        {
            for (let k = 0; k < digits.length; k++)
            {
                if(digits[i]!=0 && i!=j && j!=k && i != k)
                {
                    num = digits[i]*100 + digits[j]*10 + digits[k]; 
                    if(num%2==0) ans.add(num);
                }

            }
        }
    }
    return [...ans];
}

console.log(finding3DigitEvenNumbers(digits1));
console.log(finding3DigitEvenNumbers(digits2));
console.log(finding3DigitEvenNumbers(digits3));