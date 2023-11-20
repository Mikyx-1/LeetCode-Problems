// 1984. Minimum difference Between Highest and Lowest of K Scores
// Tested successfully

let nums1 = [90], k1 = 1;
let nums2 = [9, 4, 1, 7], k2 = 3;

function minimumDifferenceBEtweenHighestAndLowest(nums, k)
{
    let length = nums.length;
    if(length==1) return nums[0];
    else if (length < 1) return 0;

    nums.sort((a, b) => (a-b));
    let minDiff = nums[k-1] - nums[0];
    for (let i = k; i < length; i++)
    {
        minDiff = Math.min(nums[i] - nums[i-k+1])
    }
    return minDiff;
}

console.log(minimumDifferenceBEtweenHighestAndLowest(nums1, k1));
console.log(minimumDifferenceBEtweenHighestAndLowest(nums2, k2));