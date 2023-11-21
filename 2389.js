// 2389. Longest Subsequence With Limited Sum
// Tested successfully

let nums1 = [4, 5, 2, 1], queries1 = [3, 10, 21];
let nums2 = [2,3,4,5], queries2 = [1]


function longestSubsequenceWithLimitedSum(nums, queries)
{
    nums.sort((a, b) => (a-b));

    let ans = [];
    let cnt = 0;

    for (let q = 0; q < queries.length; q++)
    {
        let sum = 0;
        cnt = 0;
        for (let i = 0; i < nums.length; i++)
        {
            sum += nums[i];
            if(sum <= queries[q]) cnt++;
            else{
                ans.push(cnt);
                break;
            }

            if(q == queries.length-1 && sum <= queries[q] && i==nums.length-1)
            {
                ans.push(cnt);
            }
            
        }
    }

    return ans;
}

console.log(longestSubsequenceWithLimitedSum(nums1, queries1));
console.log(longestSubsequenceWithLimitedSum(nums2, queries2));