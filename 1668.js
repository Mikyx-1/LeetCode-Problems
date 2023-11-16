// 1668. Maximum Repeating Substring
// Tested successfully

// O(n)

let sequence1 = "ababc", word1 = "ab";
let sequence2 = "ababc", word2 = "ba";
let sequence3 = "ababc", word3 = "ac";

function maximumRepeatingSubstring(sequence, word)
{
    let wordLength = word.length;
    let windowSize = wordLength;
    let idx = 0;
    let sequenceLength = sequence.length;
    let k = 0;
    let maxK = 0;
    while(idx < sequenceLength)
    {
        if(sequence.slice(idx, idx + windowSize) == word)
        {
            k++;
            idx += windowSize;
            if(k > maxK) maxK =  k;
        }
        else{
            idx++;
            k = 0;
        }
    }

    return maxK;
}

console.log(maximumRepeatingSubstring(sequence1, word1));
console.log(maximumRepeatingSubstring(sequence2, word2));
console.log(maximumRepeatingSubstring(sequence3, word3));
