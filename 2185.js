// 2185. Counting Words With a Given Prefix
// Tested successfully

let words1 = ["pay", "attention", "practice", "attend"], pref1 = "at";
let words2 = ["leetcode", "win", "loops", "success"], pref2 = "code";

function countWordsWithPrefix(words, pref)
{
    let cnt = 0;
    let lengthPref = pref.length;
    for (word of words)
    {
        if (pref == word.slice(0, lengthPref)) cnt++;
    }
    return cnt;
}

console.log(countWordsWithPrefix(words1, pref1));
console.log(countWordsWithPrefix(words2, pref2));