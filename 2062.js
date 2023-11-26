// 2062. Count vowel Substrings Of A String
// Tested successfully

let word1 = "aeiouu", word2 = "unicornarihan", word3 = "cuaieuouac";


function lengthVowel(dict)
{
    let maxValue = 0;
    for (value of Object.values(dict))
    {
        if(value == 0) return 0;
        if(value > maxValue) maxValue = value;
    }
    return maxValue;
}

function countVowelSubstringsOfAString(word)
{
    
    let numVowels = 0;
    for (let i = 0; i < word.length; i++)
    {
        dict = {"u":0, "e":0, "o":0, "a":0, "i":0};
        for (let j = i; j < word.length; j++)
        {
            if(dict[word[j]] == null) break;
            dict[word[j]]++;
        }
        numVowels += lengthVowel(dict);
    }
    return numVowels;
}
console.log(countVowelSubstringsOfAString(word1));
console.log(countVowelSubstringsOfAString(word2));
console.log(countVowelSubstringsOfAString(word3));