// 1945. Sum of Digits Of String After Convert
// Tested successfully

let s1 = "iiii", k1 = 1;
let s2 = "leetcode", k2 = 2;
let s3 = "zbax", k3 = 2;

function sumDigits(s)
{   
    let sum = 0;
    for(item of s) sum += parseInt(item);
    return sum.toString();
}

function solve(string, k)
{
    let chars = "";
    for(s of string) chars += s.charCodeAt(0) - 96;
    for (let i = 0; i < k; i++) chars = sumDigits(chars);
    return chars;
}

console.log(solve(s1, k1));
console.log(solve(s2, k2));
console.log(solve(s3, k3));