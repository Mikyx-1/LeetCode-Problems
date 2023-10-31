// 830. Positions of Large Groups
// Tested successfully

let s1 = "abbxxxxzzy", s2 = "abc", s3 = "abcdddeeeeaabbbcd";

function positionsOfLargeGroups(s)
{
    let results = [];
    for (let i = 0; i < s.length-1; i++)
    {   
        let result = [i];
        for (let j = i+1; j < s.length; j++)
        {
           

            if(s[i] != s[j] && j-i  <= 2)
            {
                
                break;
            }

            else if (s[i] != s[j] && j - i > 2)
            {
                i = j-1;
                result.push(j-1)
                results.push(result);
                break;
            }
        }
    }

    return results;
}

console.log(positionsOfLargeGroups(s1));
console.log(positionsOfLargeGroups(s2));
console.log(positionsOfLargeGroups(s3));