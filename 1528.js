// 1528. Shuffle String
// Tested successfully

let s1 = "codeleet", indices1 = [4,5,6,7,0,2,1,3];
let s2 = "abc", indices2 = [0,1,2];

function shuffleString(s, indices)
{

    let res = [];
    for (let indice of indices) res.push("");
    for (let i = 0; i < indices.length; i++) res[indices[i]] = s[i];
    return res.join("");
}

console.log(shuffleString(s1, indices1));
console.log(shuffleString(s2, indices2));