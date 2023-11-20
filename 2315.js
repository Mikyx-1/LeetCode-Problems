// 2315. Count Asterisks
// Tested successfully

let s1 = "l|*e*et|c**o|*de|";
let s2 = "iamprogrammer";
let s3 = "yo|uar|e**|b|e***au|tifu|l";


function countAsterisks(s)
{
    let cntPair = true;
    let cntAsk = 0;
    for (item of s)
    {
        if(item == "*" && cntPair== true)
        {
            cntAsk++;
        }
        if(item=="|" && cntPair == true) cntPair=false;
        else if (item == "|" & cntPair==false) cntPair = true;
    }
    return cntAsk;
}

console.log(countAsterisks(s1));
console.log(countAsterisks(s2));
console.log(countAsterisks(s3));
