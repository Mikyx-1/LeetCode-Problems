// 2325. Decode the Message
// Tested successfully

let key1 = "the quick brown fox jumps over the lazy dog", message1 = "vkbs bs t suepuv"
let key2 = "eljuxhpwnyrdgtqkviszcfmabo", message2 = "zwx hnfx lqantp mnoeius ycgk vcnjrdb";


function createHashmap(key)
{
    let letter = 97;
    let dict = {};
    for (k of key)
    {
        if(dict[k] == null && k != " "){
            dict[k] = String.fromCharCode(letter);
            letter++;
        } 
    }
    return dict;
}

function decodeMessage(key, message)
{
    let hashMap = createHashmap(key);
    let ans = "";
    for (m of message)
    {
        if(m == " ") ans += " ";
        else ans += hashMap[m];
    }
    return ans;
}

console.log(decodeMessage(key1, message1));
console.log(decodeMessage(key2, message2));