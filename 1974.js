// 1974. Minimum Time to Type Word Using Special Typewriter
// Tested successfully


let word1 = "abc", word2 = "bza", word3 = "zjpc";

function minimumTimeBetween2Chars(char1, char2)
{
    if(char1.charCodeAt(0) > char2.charCodeAt(0)) return minimumTimeBetween2Chars(char2, char1);
    return Math.min(Math.abs(char1.charCodeAt(0) - char2.charCodeAt(0)), 
                    Math.abs(char1.charCodeAt(0) + 26 - char2.charCodeAt(0)));
} 


function minimumTimeToTypeWordUsingSpecialTypewriter(word)
{
    let currWord = "a";
    let totalTime = 0;
    for (let i = 0; i < word.length; i++)
    {
        totalTime += minimumTimeBetween2Chars(currWord, word[i]) + 1;
        currWord = word[i];
    }
    return totalTime;
}

console.log(minimumTimeToTypeWordUsingSpecialTypewriter(word1));
console.log(minimumTimeToTypeWordUsingSpecialTypewriter(word2));
console.log(minimumTimeToTypeWordUsingSpecialTypewriter(word3));

