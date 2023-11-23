// 2138. Divide a String Into Groups of Size k
// Tested successfully


let s1 = "abcdefghi", k1 = 3, fill1 = "x";
let s2 = "abcdefghij", k2 = 3, fill2 = "x";

function divideAStringIntoGroupsOfSizeK(s, k, fill)
{
    let list = [];
    let word = "";
    for (let i = 0; i < s.length; i+=k)
    {
        word = s.slice(i, i+k);
        if(word.length == k) list.push(word);
        else list.push(word + fill.repeat(k - word.length));
    }
    return list;
}

console.log(divideAStringIntoGroupsOfSizeK(s1, k1, fill1));
console.log(divideAStringIntoGroupsOfSizeK(s2, k2, fill2));