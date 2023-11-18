// 2085. Count Common Words with one occurrence
// Tested successfully

let words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]

function countCommonWordsWithOneOccurrence(words1, words2)
{
    let length1 = words1.length;
    let length2 = words2.length;

    let idx1 = 0;
    let idx2 = 0;
    let dict1 = {};
    let dict2 = {};
    let words = [];
    while(true)
    {
        if(idx1 < length1)
        {
            if(dict1[words1[idx1]] == null) dict1[words1[idx1]] = 1;
            else dict1[words1[idx1]]++;
            idx1++;
        }

        if (idx2 < length2)
        {
            if(dict2[words2[idx2]] == null) dict2[words2[idx2]] = 1;
            else dict2[words2[idx2]]++;
            idx2++;
        }
        if(idx1 >= length1 && idx2 >= length2) break;
    }

    let cnt = 0;
    for (key of Object.keys(dict1))
    {
        if(dict2[key] == 1 && dict1[key] == 1) cnt++;
    }

    return cnt;
}

console.log(countCommonWordsWithOneOccurrence(words1, words2));
console.log(countCommonWordsWithOneOccurrence(["b","bb","bbb"], ["a","aa","aaa"]));
console.log(countCommonWordsWithOneOccurrence(["a","ab"], ["a","a","a","ab"]));
