// 2413. Smallest Even Multiple

let n1 = 5, n2 = 6;
function smallestEvenMultiple(n)
{
    if(n%2==0) return n;
    return n*2;
}

console.log(smallestEvenMultiple(n1));
console.log(smallestEvenMultiple(n2));