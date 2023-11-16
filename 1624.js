// 1624. Largest Substring Between 2 equal characters
// Tested successfully

// O(n)

let s1 = "aa", s2 = "abca", s3 = "abzxy";

function largestSubstringLength(string)
{
    let dict = {};
    for (let i = 0; i < string.length; i++)
    {
        if(dict[string[i]] == null) dict[string[i]] = [i];
        else dict[string[i]].push(i);
    }

    let maxLength = -1;
    for (value of Object.values(dict))
    {
        let length = value.length;
        if(length > 1)
        {
            if(value[length-1] - value[0] - 1 > maxLength) maxLength = value[length-1] - value[0] - 1;
        }
    }
    return maxLength;
}


console.log(largestSubstringLength(s1));
console.log(largestSubstringLength(s2));
console.log(largestSubstringLength(s3));
console.log(largestSubstringLength("1000000002341234234234"));