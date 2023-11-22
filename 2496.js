// 2496. Maximum value of a string in an array
// Tested successfully

let strs1 = ["alic3","bob","3","4","00000"];
let strs2 = ["1","01","001","0001"];


function maximumValueOfAStringInAnArray(strs)
{
    let max = -1;
    for (str of strs)
    {
        breakFlag = false;
        for (s of str)
        {
            if(s.charCodeAt(0) > 57)
            {
                if(str.length > max) max = str.length;
                breakFlag = true;
                break;
            }
        }
        if(!breakFlag) if(parseInt(str) > max) max = parseInt(str);
    }
    return max;
}

console.log(maximumValueOfAStringInAnArray(strs1));
console.log(maximumValueOfAStringInAnArray(strs2));