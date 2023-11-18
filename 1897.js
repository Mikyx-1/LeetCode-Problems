// 1897. Redistribute  characters to make all strings equal
// Tested Successfully

// O(n^2)

let words1 = ["abc","aabc","bc"], words2 = ["ab","a"];

function redistributeCharactersToMakeAllStringsEqual(words)
{
    let hashMap = {};
    let length = 0;
    let totalWordLength = 0;
    for (word of words)
    {
        for (let i = 0; i < word.length; i++)
        {
            if(hashMap[word[i]] == null) hashMap[word[i]] = 1;
            else hashMap[word[i]]++;
            totalWordLength++;
        }
        length++;
    }
    if(totalWordLength%length!=0) return false;
    let prevValue = null;
    for (value of Object.values(hashMap))
    {
        if(prevValue == null){
            prevValue = value;
        }
        else{
            if(prevValue != value) return false;
        }
    }

    return true;
}

// console.log(redistributeCharactersToMakeAllStringsEqual(words1));
// console.log(redistributeCharactersToMakeAllStringsEqual(words2));
