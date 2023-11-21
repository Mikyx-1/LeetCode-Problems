// 2395. Find Subarrays With Equal Sum
// Tested successfully

let nums1 = [4, 2, 4], nums2 = [1,2,3,4,5], nums3 = [0,0,0];

function findSubarraysWithEqualSum(nums)
{
    let length = nums.length;
    for (let i = 0; i < length-2; i++)
    {
        for (let j = i+1; j < length-1; j++)
        {
            sum1 = nums[i] + nums[j];
            sum2 = nums[j] + nums[j+1];
            if(sum1 == sum2) return true;
        }
    }
    return false;
}

console.log(findSubarraysWithEqualSum(nums1));
console.log(findSubarraysWithEqualSum(nums2));
console.log(findSubarraysWithEqualSum(nums3));