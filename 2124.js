// 2124. Check if All A's Appears Before All B's
// Tested successfully

let s1 = "aaabbb", s2 = "abab", s3 = "bbb";

function check(s)
{
    let aIdx = -1, bIdx = -1;
    let bFlag = false
    for (let i = 0; i < s.length; i++)
    {
        if(s[i] == "a") aIdx=i;
        else if(s[i] == "b" && bFlag == false) 
        {
            bIdx = i; 
            bFlag = true;
        }
    }

    if (aIdx < bIdx) return true;
    return false;
}

console.log(check(s1));
console.log(check(s2));
console.log(check(s3));
