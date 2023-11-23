// 1413. Minimum Value to Get Positive Step by Step Sum
// Tested successfully

let nums1 = [-3,2,-3,4,2], nums2 = [1,2], nums3 = [1,-2,-3];

function miniMumValueToGetPositiveStepByStepSum(nums)
{
    let minSum = 0;
    let sum = 0;
    for (num of nums)
    {
        sum += num;
        if(sum < minSum && sum < 0) minSum = sum; 
    }
    return Math.abs(minSum) + 1;
}


console.log(miniMumValueToGetPositiveStepByStepSum(nums1));
console.log(miniMumValueToGetPositiveStepByStepSum(nums2));
console.log(miniMumValueToGetPositiveStepByStepSum(nums3));