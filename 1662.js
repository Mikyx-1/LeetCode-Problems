// 1662. Check if 2 string arrays are equipvalent
// Tested successfully

let word1 = ["ab", "c"], word2 = ["a", "bc"];

function checkIdenticalStringArrs(word1, word2)
{
    if(word1.join("") == word2.join("")) return true;
    return false;
}

console.log(checkIdenticalStringArrs(word1, word2));
console.log(checkIdenticalStringArrs(["a", "cb"], ["ab", "c"]));
console.log(checkIdenticalStringArrs(["abc", "d", "defg"], ["abcddefg"]));
