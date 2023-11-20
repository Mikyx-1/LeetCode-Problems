// 2287: Rearrange Characters to make target String
// Tested successfully

let s1 = "ilovecodingonleetcode", target1 = "code";
let s2 = "abcba", target2 = "abc";
let s3 = "abbaccaddaeea", target3 = "aaaaa";


function rearrangeCharactersToMakeTargetString(s, target)
{
    let dict1 = {};
    let dict2 = {};
    for (item of s)
    {
        if(dict1[item] == null) dict1[item] = 1;
        else dict1[item]++;
    }

    for (item of target)
    {

        if(dict2[item] == null) dict2[item] = 1;
        else dict2[item]++;
    }

    let minCanMake = Infinity;
    for (key of Object.keys(dict2))
    {
        if(dict1[key] == null) return 0;

        canMake = Math.floor(dict1[key]/dict2[key]);
        if(minCanMake > canMake) minCanMake = canMake;
    }

    return minCanMake;
}

console.log(rearrangeCharactersToMakeTargetString(s1, target1));
console.log(rearrangeCharactersToMakeTargetString(s2, target2));
console.log(rearrangeCharactersToMakeTargetString(s3, target3));
