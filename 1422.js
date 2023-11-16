// 1422. Maximum Score After Splitting a String
// Tested successfully

// O(n)

let s1 = "011101", s2 = "00111", s3 = "1111";

function maximumScore(string)
{
    let leftScore = 0;
    let rightScore = 0;

    let length = string.length;
    if(string[0] == "0") leftScore = 1;
    for(let i = 1; i < length; i++) if(string[i] == "1") rightScore++;
    let maxScore = leftScore + rightScore;
    for (let i = 1; i < length; i++)
    {
        if(string[i] == "0")
        {
            leftScore++;
        }
        else if(string[i] == "1")
        {
            rightScore--;
        }

        tottalScore = leftScore + rightScore;
        if(tottalScore > maxScore) maxScore = tottalScore;
    }
    return maxScore;
 
}

console.log(maximumScore(s1));
console.log(maximumScore(s2));
console.log(maximumScore(s3));


