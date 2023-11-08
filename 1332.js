// 1332. Remove Palindromic Subsequences

let s1 = "ababa", s2 = "abb", s3="baabb";

function removePalindromicSubsequences(s)
{
    if(s.length == 0) return 0;
    let reversed = s.split("").reverse().join("");
    if (s== reversed) return 1 
    else return 2;
}

console.log(removePalindromicSubsequences(s1));
console.log(removePalindromicSubsequences(s2));
console.log(removePalindromicSubsequences(s3));