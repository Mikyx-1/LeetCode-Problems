// 2485. Find the Pivot Integer
// Tested successfully

let n1 = 8, n2 = 1, n3 = 4;


function sumOfA2B(a, b)
{
    let totalNums = b-a+1;
    if(totalNums%2==0) return (totalNums/2)*(b+a);
    let middleValue = a + Math.floor((b-a)/2)
    return Math.floor(totalNums/2)*(b+a) + middleValue;
}


function findPivotInteger(n)
{

    for (let i = 1; i <= n; i++)
    {
        if(sumOfA2B(1, i) == sumOfA2B(i, n)) return i;
    }
    return -1;
}

console.log(findPivotInteger(n1));
console.log(findPivotInteger(n2));
console.log(findPivotInteger(n3));