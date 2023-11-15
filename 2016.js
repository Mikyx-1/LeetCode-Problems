// 2016. Maximum Difference Between Increasing Elements
// Tested successfully

let nums1 = [7, 1, 5, 4], nums2 = [9, 4, 3, 2], nums3 = [1, 5, 2, 10];

function maximumDifferenceBetweenIncreasingElements(nums)
{
    let maxDiff = -1;
    let length = nums.length;

    for (let i = 0; i < length-1; i++)
    {
        for (let j = i+1; j < length; j++)
        {   
            let diff = nums[j] - nums[i];
            if(diff > 0 && diff > maxDiff) maxDiff = diff;
        }
    }

    return maxDiff;
}

console.log(maximumDifferenceBetweenIncreasingElements(nums1));
console.log(maximumDifferenceBetweenIncreasingElements(nums2));
console.log(maximumDifferenceBetweenIncreasingElements(nums3));