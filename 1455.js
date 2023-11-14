// 1455. Check if a word occurs as a prefix of any word in a sentence
// Tested successfully


let sentence1 = "i love eating burger", searchWord1 = "burg";
let sentence2 = "this problem is an easy problem", searchWord2 = "pro";
let sentence3 = "i am tired", searchWord3 = "you";

function checkPrefixOrder(sentence, searchWord)
{
    let idx = -1;
    let searchWordLength = searchWord.length;
    let sentenceList = sentence.split(" ");
    for (let i = 0; i < sentenceList.length; i++)
    {
        if(sentenceList[i].slice(0, searchWordLength) == searchWord) return i+1;
    }
    return idx;
}


console.log(checkPrefixOrder(sentence1, searchWord1));
console.log(checkPrefixOrder(sentence2, searchWord2));
console.log(checkPrefixOrder(sentence3, searchWord3));