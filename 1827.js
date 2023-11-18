// 1827. Minimum Operations to make the array increasing
// Tested successfully

// O(n)

let nums1 = [1, 1, 1], nums2 = [1, 5, 2, 4, 1], nums3 = [8];

function minimumOperations(nums)
{

    let length = nums.length;
    if(length < 2) return 0;

    let numOps = 0;
    for (let i = 1; i < length; i++)
    {
        if(nums[i] <= nums[i-1])
        {
            numOps = numOps + (nums[i-1] - nums[i] + 1)
            nums[i] = nums[i-1]+1;
        }
    }

    return numOps;
}

console.log(minimumOperations(nums1));
console.log(minimumOperations(nums2));
console.log(minimumOperations(nums3));