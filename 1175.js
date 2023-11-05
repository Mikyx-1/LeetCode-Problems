// 1175. Prime Arrangements
// Tested successfully

function checkPrime(n){
    if (n==2 || n==3) return true;
    if (n<=1) return false;
    for(let i = 2; i < Math.sqrt(n) + 1; i++) if (n%i==0) return false;
    
    return true;
}


function primeRange(n)
{
    let arr = [];
    for (let i = 2; i < n+1; i++) if (checkPrime(i)) arr.push(i);
    return arr;
}

function factorial(n)
{
    if(n==1) return 1;
    return n*factorial(n-1);
}

function primeArrangements(n)
{
    let range = primeRange(n);
    let cnt = 1;
    
    return (factorial(n-range.length)*factorial(range.length));
}

console.log(primeArrangements(10));

