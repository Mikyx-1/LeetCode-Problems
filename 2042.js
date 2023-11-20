// Check if Numbers are ascending in a sentence
// Tested successfully

let s1 = "1 box has 3 blue 4 red 6 green and 12 yellow marbles";
let s2 = "hello world 5 x 5"
let s3 = "sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s";


function extractNums(sentence)
{
    let nums = [];
    let num = "";
    for (s of sentence)
    {
        let code = s.charCodeAt(0);
        if(code > 47 && code < 58)
        {
            num += s;
        }
        else{
            if(num != "") nums.push(parseInt(num));
            num = "";
        }
    }

    if(num != "") nums.push(parseInt(num));
    return nums;
}

function checkAscending(sentence)
{
    let nums = extractNums(sentence);
    for (let i = 1; i < nums.length; i++)
    {
        if(nums[i] <= nums[i-1]) return false;
    }
    return true;
}

console.log(checkAscending(s1));
console.log(checkAscending(s2));
console.log(checkAscending(s3));