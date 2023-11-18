// 2000. Reverse Prefix of Word
// Tested successfully

let word1 = "abcdefd", ch1 = "d";
let word2 = "xyxzxe", ch2 = "z";
let word3 = "abcd", ch3 = "z";

function reverseString(string)
{
    let ans = "";
    for (s of string) ans = s + ans;
    return ans;
}

function reversePrefixOfWord(word, ch)
{
    for (let i = 0; i < word.length; i++)
    {
        if(word[i] == ch) return reverseString(word.slice(0, i+1)) + word.slice(i+1, ); 
    }

    return word;
}

console.log(reversePrefixOfWord(word1, ch1));
console.log(reversePrefixOfWord(word2, ch2));
console.log(reversePrefixOfWord(word3, ch3));