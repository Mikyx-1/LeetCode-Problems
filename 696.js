// 696. Count Binary Substrings
// Tested successfully

let s1 = "00110011", s2 = "10101";

function countSubString(string, pattern)
{
    let cnt = 0;
    let patternLength = pattern.length;
    for(let i = 0; i < string.length-Math.floor(patternLength/2); i++)
    {
        if(string.slice(i, i+patternLength) == pattern) cnt++;
    }

    return cnt;
}


function countBinarySubstring(string)
{
    let counter = 0;
    let pattern = "01";
    let length = string.length;
    let changeRotation = true;
    while(pattern.length <= length)
    {
        patternCnt = countSubString(string, pattern); 
        if (patternCnt==0) break;
        counter += patternCnt;

        if(changeRotation == true)
        {
            changeRotation = false;
            pattern = pattern.split("").reverse().join("");
        }
        else{
            changeRotation=true;
            if(pattern[0] == "1") pattern = "1" + pattern + "0";
            else pattern = "0" + pattern + "1";
        }
    }

    return counter;
}

console.log(countBinarySubstring(s1));
console.log(countBinarySubstring(s2));
