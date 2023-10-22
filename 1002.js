// 1002. Find Common Characters
// Tested successfully

let words1 = ["bella", "label", "roller"];
let words2 = ["cool", "lock", "cook"];


function findCommonCharactersOf2Words(word1, word2)
{  
    let word1List = word1.split("");
    let word2List = word2.split("");
    let result = []
    for (let i = 0; i < word1List.length; i++)
    {
        let idx = word2List.indexOf(word1List[i]);
        if(idx != -1){
            word2List.splice(idx, 1);
            result.push(word1List[i]);
        }
    }
    return result;
}

function findCommonCharacters(words)
{
    let result = words[0];
    for (let i = 1; i < words.length; i++)
    {
        result = findCommonCharactersOf2Words(result, words[i])
        result = result.join("")
    }    
    return result.split("")
}

console.log(findCommonCharacters(words1))
console.log(findCommonCharacters(words2))

