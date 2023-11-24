// 2595. Number of Even and Odd bits
// Tested successfully

let n1 = 17, n2 = 2;

function toBin(n)
{
    if(Math.floor(n/2) == 0) return (n%2).toString();

    return toBin(Math.floor(n/2)) + (n%2).toString();
}

function numberOfEvenAndOddBits(n)
{
    let ans = [0, 0];
    let bin = toBin(n);
    for (let i = 0; i < bin.length; i++)
    {
        ans[i%2] += parseInt(bin[bin.length - 1 - i]);
    }
    return ans;
}

console.log(numberOfEvenAndOddBits(n1));
console.log(numberOfEvenAndOddBits(n2));