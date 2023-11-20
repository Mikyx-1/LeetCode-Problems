// 1800. Maximum Ascending Subarray Sum
// Tested successfully

let nums1 = [10,20,30,5,10,50], nums2 = [10,20,30,40,50], nums3 = [12,17,15,13,10,11,12];

function maximumAscendingSubarraySum(nums)
{
    let runningSum = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++)
    {
        if(nums[i] > nums[i-1])
        {
            runningSum += nums[i];
        }

        else{
            if(runningSum > max) max = runningSum;
            runningSum = nums[i];
        }
    }

    if(runningSum > max) return runningSum;

    return max;
}

console.log(maximumAscendingSubarraySum(nums1));
console.log(maximumAscendingSubarraySum(nums2));
console.log(maximumAscendingSubarraySum(nums3));