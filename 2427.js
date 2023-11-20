// 2427. Number of Common Factors
// Tested successfully

let a1 = 12, b1 = 6;
let a2 = 25, b2 = 30;

function numberOfCommonFactors(a, b)
{
    if (b>a) return numberOfCommonFactors(b, a);

    let upperThreshold = Math.min(Math.ceil(a/2) + 1, b);
    let cnt = 1;
    for (let i = 2; i <= upperThreshold; i++)
    {
        if(a%i==0 && b%i == 0) cnt++;
    }

    return cnt;
}

console.log(numberOfCommonFactors(a1, b1));
console.log(numberOfCommonFactors(a2, b2));