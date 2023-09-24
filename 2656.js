// 2656: Maximum Sum with exactly K elements
// Tested successfully

let nums1 = [1, 2, 3, 4, 5];
let k1 = 3;

let nums2 = [5, 5, 5];
let k2 = 2;



// Assume that the nums has been sorted

function maximumSumWithExactlyKElements(nums, k)
{
    
    let result = 0;

    for (let i = 0; i < k; i++)
    {
        result += nums[nums.length-1];
        nums[nums.length-1]++;
    }

    return result;
}

console.log(maximumSumWithExactlyKElements(nums1, k1));
console.log(maximumSumWithExactlyKElements(nums2, k2));