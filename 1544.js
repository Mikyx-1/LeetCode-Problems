// 1544. Make the String Great
// Tested successfully

let s1 = "leEeetcode", s2 = "abBAcC", s3 = "s";

function makeTheStringGreat(s)
{
    for (let i = 0; i < s.length-1; i++)
    {
        if(s[i].charCodeAt(0) + 32 ==  s[i+1].charCodeAt(0) || s[i].charCodeAt(0) - 32 == s[i+1].charCodeAt(0))
        {
            return makeTheStringGreat(s.slice(0, i) + s.slice(i+2, ));
        }
    }

    return s;
}

console.log(makeTheStringGreat(s1));
console.log(makeTheStringGreat(s2));
console.log(makeTheStringGreat(s3));