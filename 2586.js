// 2586. Count the number of vowel strings in range
// Tested successfully

let words1 = ["are","amy","u"], left1 = 0, right1 = 2;
let words2 = ["hey","aeo","mu","ooo","artro"], left2 = 1, right2 = 4;


function countTheNumberOfVowelStringsInRange(words, left, right)
{
    let cnt = 0;
    let dict = {"u":1, "e":1, "o":1, "a":1, "i":1};
    for(let i = left; i <= right; i++)
    {
        if(dict[words[i][0]] != null && dict[words[i][words[i].length - 1]]) cnt++;
    }
    return cnt;
}

console.log(countTheNumberOfVowelStringsInRange(words1, left1, right1));
console.log(countTheNumberOfVowelStringsInRange(words2, left2, right2));