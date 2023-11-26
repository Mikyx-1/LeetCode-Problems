// Count Prefixes of a Given String
// Tested successfully

let words1 = ["a","b","c","ab","bc","abc"], s1 = "abc";
let words2 = ["a","a"], s2 = "aa";


function countPrefixesOfAGivenString(words, s)
{
    let cnt = 0;
    for(word of words)
    {
        if(s.slice(0, word.length) == word) cnt++;
    }
    return cnt;
}

console.log(countPrefixesOfAGivenString(words1, s1));
console.log(countPrefixesOfAGivenString(words2, s2));

