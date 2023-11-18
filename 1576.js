// 1576. Replace All ?'s to Avoid Consecutive repating characters
// Tested successfully

let s1 = "?zs", s2 = "ubv?w";

function split(string){
    let length = 0;
    let res = [];
    for (s of string){
        res.push(s);
        length++;
    }
    return [res, length];
}

function findChar(leftChar, rightChar)
{
    for (let i = 97; i < 123; i++)
    {   
        char = String.fromCharCode(i);
        if(char != leftChar && char != rightChar) return char;
    }

}
function replacetoAvoidDup(string)
{
    let [list, length] = split(string);
    
    for (let i = 0; i < length; i++)
    {
        if(list[i] == "?" && i == 0) list[i] = findChar("@", list[1])
        else if (list[i] == "?" && i == length-1) list[i] = findChar(list[i-1], "@");
        else if (list[i] == "?") list[i] = findChar(list[i-1], list[i+1]);
    }

    return list.join("");
}

console.log(replacetoAvoidDup(s1));
console.log(replacetoAvoidDup(s2));
console.log(replacetoAvoidDup("????????????????????"));