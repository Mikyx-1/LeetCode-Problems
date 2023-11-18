// 2744. Find Maximum Number of String Pairs
// Tested successfully

// O(n)

let words1 = ["cd","ac","dc","ca","zz"], words2 = ["ab","ba","cc"], words3 = ["aa","ab"];


function reverseString(string)
{
    let ans = "";
    for (s of string) ans = s + ans;
    return ans;
}


function findMaximumNumberOfStringPairs(words)
{
    let dict = {};
    let cnt = 0;
    for (word of words)
    {
        let key = word;
        let reversedkey = reverseString(word)
        if (dict[key] == null) dict[reversedkey] = "wait";
        else {
            delete dict[key];
            cnt ++;
        }
    }

    return cnt;
}

console.log(findMaximumNumberOfStringPairs(words1));
console.log(findMaximumNumberOfStringPairs(words2));
console.log(findMaximumNumberOfStringPairs(words3));
