// 1309. Decrypt String from Alphabet to Integer Mapping
// Tested successfully

let s1 = "10#11#12", s2 = "1326#";


function checkSharpCharacter(s)
{
    for (item of s) {
        if (item == "#") return true;
    }
    return false;
}

function decrypt(string)
{
    let idx = 0;
    let arr1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
    let arr2 = ["j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let result = "";
    while(idx < string.length)
    {
        if(checkSharpCharacter(string.slice(idx, idx+3))){
            result = result + arr2[parseInt(string.slice(idx, idx+2) - 10)];
            idx+= 3;
        }

        else{
            result = result + arr1[parseInt(string[idx]) - 1];
            idx++;
        }
    }

    return result;
}

console.log(decrypt(s1));
console.log(decrypt(s2));