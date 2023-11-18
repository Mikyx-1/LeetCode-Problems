// 1967. Number of Strings that appear as substrings in word
// Tested successfully

let patterns1 = ["a","abc","bc","d"], word1 = "abc";
let patterns2 = ["a","b","c"], word2 = "aaaaabbbbb";
let patterns3 = ["a","a","a"], word3 = "ab";

function numberOfStringsThatAppearAsSubstringsInWord(pattern, word)
{
    let cnt = 0;
    for (pattern of pattern)
    {
        if(word.indexOf(pattern) != -1) cnt++;
    }
    return cnt;
}

console.log(numberOfStringsThatAppearAsSubstringsInWord(patterns1, word1));
console.log(numberOfStringsThatAppearAsSubstringsInWord(patterns2, word2));
console.log(numberOfStringsThatAppearAsSubstringsInWord(patterns3, word3));