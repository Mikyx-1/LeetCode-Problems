// 2760. Longest Even Odd Subarray with Threshold
// Tested successfully

let nums1 = [3,2,5,4], threshold1 = 5;
let nums2 = [1,2], threshold2 = 2;
let nums3 = [2,3,4,5], threshold3 = 4;

function longestEvenOddSubarrayWithThreshold(nums, threshold)
{
    let startIdx = 0;
    let conditionYieled = false;
    let currCnt = 0;
    let maxCnt = 0;
    for (let i = 0; i < nums.length; i++)
    {
        if(nums[i] %2 == 0 && conditionYieled == false)
        {
            startIdx = i;
            conditionYieled = true;
            currCnt = 0;
        }

        if(nums[i] % 2 != nums[i+1] %2 && conditionYieled==true && nums[i] <= threshold)
        {
            currCnt++;
            if(currCnt > maxCnt) maxCnt = currCnt;
        }
    }

    return maxCnt;
}

console.log(longestEvenOddSubarrayWithThreshold(nums1, threshold1));
console.log(longestEvenOddSubarrayWithThreshold(nums2, threshold2));
console.log(longestEvenOddSubarrayWithThreshold(nums3, threshold3));