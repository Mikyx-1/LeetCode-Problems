// 2481. Minimum Cuts To Divide a Circle
// Tested successfully

let n1 = 4, n2 = 3;

function minimumCutsToDivideACircle(n)
{
    if(n==1) return 0;
    if(n%2==0) return n/2;
    return n;
}

console.log(minimumCutsToDivideACircle(n1));
console.log(minimumCutsToDivideACircle(n2));