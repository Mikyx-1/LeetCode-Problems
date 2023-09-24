// 2652: Sum Multiplies
// Tested successfully

let n1 = 7;
let n2 = 10;
let n3 = 9;

function sumMultiplies(n)
{
    if (n==1) return 0;

    if (n % 3 == 0 || n%5==0 || n%7==0) return n + sumMultiplies(n-1);

    return sumMultiplies(n-1);
}

console.log(sumMultiplies(n1));
console.log(sumMultiplies(n2));
console.log(sumMultiplies(n3));