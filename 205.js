// 205: Isomorphic Strings
// Tested successfully
// 2 strings s and t are isomorphic if the characters in s can be replaced to get t

let s1 = 'egg';
let t1 = 'add';

let s2 = 'foo';
let t2 = 'bar';

let s3 = 'paper';
let t3 = 'title';

function isomorphicStrings(s, t)
{
    let hashMap = {};
    for (let i = 0; i < s.length; i++)
    {
        if(!(s[i] in hashMap))
        {
            hashMap[s[i]] = t[i];
        }
    }


    let reconstructedString = '';
    for (let i = 0; i < s.length; i++)
    {
        reconstructedString += hashMap[s[i]];
    }
    if (reconstructedString==t) return true;

    return false;
}

console.log(isomorphicStrings(s1, t1));
console.log(isomorphicStrings(s2, t2));
console.log(isomorphicStrings(s3, t3));

