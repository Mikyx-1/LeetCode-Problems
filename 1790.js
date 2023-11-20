// 1790. Check if One string swap can make strings equal
// Tested successfully

// let s1 = "bank", s2 = "kanb";
// let s1 = "attack", s2 = "defend";
let s1 = "kelb", s2 = "kelb";

function checkEqualWithOneSwap(s1, s2)
{
    let have = [];
    let need = [];
    let length = 0;
    for (let i = 0; i < s1.length; i++)
    {
        if(s1[i] != s2[i])
        {
            have.push(s2[i]);
            need.push(s1[i]);
            length++;
        }
        if(length > 2) return false;
    }

    for (h of have)
    {
        if(need.indexOf(h) == -1) return false;
    }
    return true;
}

console.log(checkEqualWithOneSwap(s1, s2));

