// 2544. Alternating Digit Sum
let n1 = 521, n2 = 111, n3 = 886996;
// Tested successfully


function alternatingDigitSum(n)
{
    let power = 1;
    let sum = 0;
    let str = n.toString();
    for (s of str)
    {
        power = 1 - power;
        sum += Math.pow(-1, power)*parseInt(s);
    }

    return sum;
}

console.log(alternatingDigitSum(n1));
console.log(alternatingDigitSum(n2));
console.log(alternatingDigitSum(n3));