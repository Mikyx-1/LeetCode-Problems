// 300: Longest Increasing Subsequence
// Tested successfully

let nums1 = [10, 9, 2, 5, 3, 7, 101, 18];
let nums2 = [0, 1, 0, 3, 2, 3];
let nums3 = [7, 7, 7, 7, 7, 7, 7];

function longestSubsequence(nums)
{
    let ans = new Array(nums.length).fill(1);

    for (let i = 0; i < nums.length; i++)
    {   
        let maxSub = 0;
        for(let j = 0; j < i ; j++)
        {
            if(nums[i] > nums[j] & ans[j] > maxSub)
            {
                maxSub = ans[j];
            }
        }
        ans[i] += maxSub;
    }

    return ans.pop()
}

console.log(longestSubsequence(nums1));
console.log(longestSubsequence(nums2));
console.log(longestSubsequence(nums3));