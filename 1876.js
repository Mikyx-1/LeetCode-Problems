// 1876. Substrings of Size 3 with distinct characters
// Tested successfully

let s1 = "xyzzaz", s2 = "aababcabc";

function checkDistinct(string)
{
    if(string[0] == string[1] || string[0] == string[2] || string[1] == string[2]) return false;
    return true;
}
function substringsOfSize3WithDistinctCharacters(string)
{
    let cnt = 0;
    for (let i = 0; i < string.length-2; i++)
    {
        if(checkDistinct(string.slice(i, i+3))) cnt++;
    }
    return cnt;
}
console.log(substringsOfSize3WithDistinctCharacters(s1));
console.log(substringsOfSize3WithDistinctCharacters(s2));