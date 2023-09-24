// 198: House Robber
// Tested successfully


let nums1 = [1, 2, 3, 1];
let nums2 = [2, 7, 9, 3, 1];

function houseRobber(nums)
{
    let ans = [nums[0], nums[1]];
    for (let i = 2; i < nums.length; i++)
    {
        ans.push(Math.max(ans[i-2] + nums[i], ans[i-1]));
    }
    return ans.pop();
}

