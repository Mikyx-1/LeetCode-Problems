// 1957. Delete Characters to make fancy string
// Tested successfully

let s1 = "leeetcode", s2 = "aaabaaaa";

function makeFancyString(string)
{
    let list = string.split("");
    let idx = 0;
    while(idx < list.length-2)
    {
        if(list[idx] == list[idx+1] && list[idx] == list[idx+2] && list[idx+1] == list[idx+2])
        {
            list.splice(idx, 1);
        }
        else idx++;
    }

    return list.join("");
}

console.log(makeFancyString(s1));
console.log(makeFancyString(s2));