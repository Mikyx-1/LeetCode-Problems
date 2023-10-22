// 961: N-Repeated Element in Size 2N Array
// Tested successfully

let nums1 = [1, 2, 3, 3];
let nums2 = [2, 1, 2, 5, 3, 2];
let nums3 = [5, 1, 5, 2, 5, 3, 5, 4];

function NRepeatedElement(nums)
{
    for (let i = 0; i < nums.length-2; i++)
    {
        if(nums[i] == nums[i+1] || nums[i] == nums[i+2]) return nums[i];
    }
    return nums[nums.length-1];
}

console.log(NRepeatedElement(nums1));
console.log(NRepeatedElement(nums2));
console.log(NRepeatedElement(nums3));
