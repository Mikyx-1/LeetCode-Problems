// 1837. Sum of Digits In Base K
// Tested successfully

function toBaseK(num, k, res = "")
{
    if(Math.floor(num/k) == 0) return (num%k).toString()  + res;
    
    res = (num%k).toString() + res;
    return toBaseK(Math.floor(num/k), k, res);
}


function sumOfDigitsInBaseK(n, k){
    let baseK = toBaseK(n, k);
    let sum = 0;
    for (b of baseK) sum += parseInt(b);
    return sum;
}

console.log(sumOfDigitsInBaseK(34, 6));
console.log(sumOfDigitsInBaseK(10, 10));