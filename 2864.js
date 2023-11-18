// 2864. Maximum Odd Binary Number
// Tested successfully

// O(n)

let s1 = "010", s2 = "0101";

function maximumOddBinaryNumber(s)
{
    let maxOddBin = "";
    for (item of s)
    {
        if (item == "1") maxOddBin = item + maxOddBin;
        else maxOddBin = maxOddBin + item;
    }
    return maxOddBin.slice(1, ) + "1";
}

console.log(maximumOddBinaryNumber(s1));
console.log(maximumOddBinaryNumber(s2));