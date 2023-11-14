// 2108. Find first Palindromic String in the array
// Tested successfully

let words1 = ["abc","car","ada","racecar","cool"];
let words2 = ["notapalindrome","racecar"];
let words3 = ["def","ghi"];


function checkPalindrome(string)
{
    let leftIdx = 0; rightIdx = string.length-1;
    while(leftIdx < rightIdx)
    {
        if(string[leftIdx] != string[rightIdx]) return false;
        leftIdx++;
        rightIdx--;
    }
    return true;
}

function findFirstPalindromicString(words)
{
    for(word of words) if(checkPalindrome(word)) return word;
    return ""
}


console.log(findFirstPalindromicString(words1));
console.log(findFirstPalindromicString(words2));
console.log(findFirstPalindromicString(words3));