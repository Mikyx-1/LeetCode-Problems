// 2243. Calculate Digit Sum of a String
// Tested successfully

let s1 = "11111222223", k1 = 3;
let s2 = "00000000", k2 = 3;

function sumDigits(string)
{
    let sum = 0;
    for (s of string) sum += parseInt(s);
    return sum;
}

function splitString(string, k)
{
    let list = [];
    for (let i =0; i <= string.length; i+=k)
    {
        list.push(string.slice(i, i+k))
    }
    return list;
}

function calculateDigitSumOfAString(s, k)
{

    list = splitString(s, k);
    while(true)
    {
        sum = "";
        for (l of list) sum += sumDigits(l).toString();

        if(sum.length <= k) return sum;
        list = splitString(sum, k);
    }
}

console.log(calculateDigitSumOfAString(s1, k1));
console.log(calculateDigitSumOfAString(s2, k2));