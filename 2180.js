// 2180. Count Integers with even digit sum
// Tested successfully

let num1 = 4, num2 = 30;

function sumDigits(num)
{
    if(Math.floor(num/10) == 0) return num%10;
    
    let res = num%10;
    return sumDigits(Math.floor(num/10)) + res;
}


function countIntegersWithEvenDigitSum(num)
{   
    if(num < 2) return 0;

    let cnt = 0;
    for (let i=2; i <= num; i++)
    {
        if(sumDigits(i)%2==0) cnt++;
    }

    return cnt
}


console.log(countIntegersWithEvenDigitSum(num1));
console.log(countIntegersWithEvenDigitSum(num2));

