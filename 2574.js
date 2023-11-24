// 2574. Left and Right Sum Differences
// Tested successfully

let nums1 = [10,4,8,3], nums2 = [1];

function leftAndrightSumDifferences(nums)
{
    let rightSum = 0;
    for (num of nums) rightSum += num;
    rightSum -= nums[0];
    let leftSum = 0;
    let ans = [];
    for (let i  = 0; i < nums.length; i++)
    {
        ans.push(Math.abs(rightSum - leftSum));
        leftSum += nums[i];
        rightSum -= nums[i+1];
    }
    return ans;
}

console.log(leftAndrightSumDifferences(nums1));
console.log(leftAndrightSumDifferences(nums2));