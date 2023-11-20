// 2278. Percentage of Letter in string
// Tested successfully

let s1 = "foobar", letter1 = "o";
let s2 = "jjjj", letter2 = "k";

function percentageOfLetterInString(s, letter)
{
    let letterCnt = 0;
    let length = 0;
    for (item of s)
    {
        if(item == letter) letterCnt++;
        length++;
    }
    return (letterCnt/length)*100;
}

console.log(percentageOfLetterInString(s1, letter1));
console.log(percentageOfLetterInString(s2, letter2));