// 2068. Check whether 2 strings are almost equipvalent
// Tested successfully

let word1 = "aaaa", word2 = "bccb";

function checkEquipvalentStrings(word1, word2)
{
    let dict1 = {};
    let dict2 = {};
    let letters = [];
    for (let i = 0; i < word1.length; i++)
    {
        if(dict1[word1[i]]==null){
            letters.push(word1[i]);
            dict1[word1[i]] = 1;
        } 
        else dict1[word1[i]]++;

        if(dict2[word2[i]] == null)
        {
            dict2[word2[i]] = 1;
            letters.push(word2[i]);
        } 
        else dict2[word2[i]]++;
    }

    for (letter of letters)
    {
        if(dict1[letter] == null && dict2[letter] > 3) return false;
        else if (dict2[letter] == null && dict1[letter] > 3) return false;

        else if(Math.abs(dict1[letter] - dict2[letter]) > 3) return false;
    }
    return true;
}

console.log(checkEquipvalentStrings(word1, word2));
console.log(checkEquipvalentStrings("abcdeef", "abaaacc"));
console.log(checkEquipvalentStrings("cccddabba", "babababab"));
