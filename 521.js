// 521. Longest Uncommon Subsequence I
// Tested successfully

function returnUncommonSubsequence(a, b)
{   
    let result = "";
    for (item of a)
    {
        if(b.indexOf(item) == -1) result+= item
    }
    return result;
}


function longestUncommonSubsequence(a, b)
{   
    let res = Math.max(returnUncommonSubsequence(a, b).length, returnUncommonSubsequence(b, a).length); 
    if (res == 0) return -1
    return res;
}

console.log(longestUncommonSubsequence("aaa", "aaa"));