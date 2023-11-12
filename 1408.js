// 1408. String Matching in an Array
// Tested successfully

let words1 = ["mass", "as", "hero", "superhero"];
let words2 = ["leetcode", "et", "code"];


function stringMatching(words)
{   
    let length = words.length;
    let visitedWords = new Set();
    for (let i = 0; i < length; i++)
    {
        for(let j = i+1; j < length; j++)
        {
            if(words[i].indexOf(words[j]) != -1) visitedWords.add(words[j]);

            if(words[j].indexOf(words[i]) != -1) visitedWords.add(words[i]);
        }
    }

    return [...visitedWords];
}


console.log(stringMatching(words1));
console.log(stringMatching(words2));