// 2027. Minimum Moves to Convert String
// Tested successfully

// O(n/3) => O(n)
let s1 = "XXX", s2 = "XX0X", s3 = "0000";


function minimumMovesToConvertString(s)
{
    let numMoves = 0;
    let length = s.length;
    let numSegments = Math.floor(length/3);
    let numLeft = length%3;
    for (let i = 0; i < numSegments; i++)
    {
        if (s.slice(i*3, (i+1)*3).indexOf("X") != -1) numMoves++;
    }

    if(numLeft != 0 && (s[length-1] == "X" || s[length-2] == "X")) numMoves++;

    return numMoves;
}

console.log(minimumMovesToConvertString(s1));
console.log(minimumMovesToConvertString(s2));
console.log(minimumMovesToConvertString(s3));