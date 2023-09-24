// 290: Word Pattern
// Tested successfully

let pattern1 = 'abba';
let s1 = 'dog cat cat dog';

let pattern2 = 'abba';
let s2 = 'dog cat cat fish';

let pattern3 = 'aaaa';
let s3 = 'dog cat cat dog';


function wordPattern(pattern, string)
{
    if(pattern.length != string.split(' ').length) return false;

    let hashMap = {};
    let stringInList = string.split(' ');
    for (let i = 0; i < pattern.length; i++)
    {
        if(hashMap[pattern[i]] == undefined) hashMap[pattern[i]] = stringInList[i];
        if(hashMap[pattern[i]] != undefined && hashMap[pattern[i]] != stringInList[i]) return false;
    }

    return true;


}

console.log(wordPattern(pattern1, s1));
console.log(wordPattern(pattern2, s2));
console.log(wordPattern(pattern3, s3));