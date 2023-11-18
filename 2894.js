// 2894. Divisible and Non-divisible Sums Difference
// Tested successfully

let n1 = 10, m1 = 3;
let n2 = 5, m2 =  6;
let n3 = 5, m3 = 1;

function divisibleAndNonDivisibleSumsDifference(n, m)
{
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 1; i <= n; i++)
    {
        if(i%m!=0) sum1 += i;
        else sum2 += i;
    }

    return sum1 - sum2;
}

console.log(divisibleAndNonDivisibleSumsDifference(n1, m1));
console.log(divisibleAndNonDivisibleSumsDifference(n2, m2));
console.log(divisibleAndNonDivisibleSumsDifference(n3, m3));