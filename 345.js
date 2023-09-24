// 345. Reverse Vowels of a String
// Tested successfully


let s1 = 'hello';
let s2 = 'leetcode';

function reverseVowels(string)
{
    let vowels = ['u', 'e', 'o', 'a', 'i'];
    let stringVowels = [];
    let string1 = string.split('');
    for(let i = 0; i < string.length+1; i++)
    {
        if(vowels.includes(string1[i])){
            stringVowels.push(string1[i]);
            string1[i] = '*';
        }
    }


    stringVowels = stringVowels.reverse();
    let idx = 0
    for (let i = 0; i < string1.length; i++)
    {
        if(string1[i] == "*")
        {
            string1[i] = stringVowels[idx];
            idx++;
        }
    }

    return string1.join("")
}


console.log(reverseVowels(s1));
console.log(reverseVowels(s2));
