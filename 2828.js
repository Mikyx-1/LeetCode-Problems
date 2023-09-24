// 2828: Check if a string is an acronym of words
// Tested sucessfully

let words1 = ['alice', 'bob', 'charlie'];
let s1 = 'abc';

let words2 = ['an', 'apple'];
let s2 = 'a';

let words3 = ['never', 'gonna', 'give', 'up', 'on', 'you'];
let s3 = 'ngguoy';

function checkAcronym(words, s)
{
    if(s.length != words.length) return false;

    for(let i = 0; i < s.length; i++)
    {
        if(words[i][0] != s[i]) return false;
    }

    return true;
}

console.log(checkAcronym(words1, s1));
console.log(checkAcronym(words2, s2));
console.log(checkAcronym(words3, s3));