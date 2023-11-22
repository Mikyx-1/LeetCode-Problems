// 1961. Check If String Is A Prefix Of Array
// TEsted successfully


let s1 = "iloveleetcode", words1 = ["i","love","leetcode","apples"];
let s2 = "iloveleetcode", words2 = ["apples","i","love","leetcode"];

function checkIfStringIsAPrefixOfArray(s, words)
{
    let stringLength = s.length;
    let currString = "";
    let currStringLength = 0;
    let idx = 0;
    while(true)
    {
        currString += words[idx];
        if(words[idx] != s.slice(currStringLength, currStringLength+words[idx].length)) return false;
        currStringLength += words[idx].length;
        if(currStringLength == stringLength) return true;
        idx++;
    }

}

console.log(checkIfStringIsAPrefixOfArray(s1, words1));
console.log(checkIfStringIsAPrefixOfArray(s2, words2));