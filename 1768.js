// 1768. Merge Strings Alternately
// Tested successfully

// O(n)

let word1 = "abc", word2 = "pqr";

function mergeStringsAlternately(word1, word2)
{
    let length1 = word1.length;
    let length2 = word2.length;
    let res = "";
    if(length1 >= length2)
    {
        for(let i = 0; i < length2; i++)
        {
            res = res + word1[i] + word2[i];
        }

        res =  res + word1.slice(length2, );
    }

    else{
        for (let i = 0; i < length1; i++)
        {
            res = res + word1[i] + word2[i];
        }
        res = res + word2.slice(length1, )
    }
    return res;
}

console.log(mergeStringsAlternately(word1, word2));
console.log(mergeStringsAlternately("ab", "pqrs"));
console.log(mergeStringsAlternately("abcd", "pq"));