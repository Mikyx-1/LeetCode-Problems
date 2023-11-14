// 1480. Running sum of 1D Array
// Tested successfully

let nums1 = [1, 2, 3, 4], nums2 = [1, 1, 1, 1, 1], nums3 = [3, 1, 2, 10, 1];

function calculateRunningSum(nums)
{
    let runningSum = nums[0];
    let ans = [runningSum];
    for(let i = 1; i < nums.length; i++)
    {
        runningSum = runningSum + nums[i];
        ans.push(runningSum);
    }

    return ans;
}

console.log(calculateRunningSum(nums1));
console.log(calculateRunningSum(nums2));
console.log(calculateRunningSum(nums3));
