// 2351. First Letter to Apeear Twice
// Tested successfully

let s1 = "abccbaacz", s2 = "abcdd";

function firstLetterToApeearTwice(s)
{
    let dict = {};
    for (item of s)
    {
        if(dict[item] == null) dict[item] = 1;
        else return item;
    }
}

console.log(firstLetterToApeearTwice(s1));
console.log(firstLetterToApeearTwice(s2));