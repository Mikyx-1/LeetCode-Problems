// 1446. Consecutive characters
// Tested successfully

let s1 = "leetcode", s2 = "abbcccddddeeeeedcba";

function consecutiveCharacters(string)
{   
    let cnt = 1;
    let maxcnt = cnt;
    let char = string[0];
    for (let i = 1; i < string.length; i++)
    {
        if(string[i] == char)
        {
            cnt++;
        }
        else{
            char = string[i];
            if(cnt > maxcnt) maxcnt = cnt;
            cnt = 1;
        }
    }

    return maxcnt;
}

console.log(consecutiveCharacters(s1));
console.log(consecutiveCharacters(s2));