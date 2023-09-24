// 219: Contains Duplicate II
// Tested successfully

let nums1 = [1, 2, 3, 1];
let nums2 = [1, 0, 1, 1];
let nums3 = [1, 2, 3, 1, 2, 3];

let k1 = 3, k2=1, k3=2;


function containDuplicateII(nums, k)
{
    for (let i = 0; i < nums.length; i++)
    {
        for (let j = 0; j <nums.length; j++)
        {
            if(nums[i] == nums[j] && Math.abs(i-j) <= k && i!=j) return true;
        }
    }
    
    return false;
}

console.log(containDuplicateII(nums1, k1));
console.log(containDuplicateII(nums2, k2));
console.log(containDuplicateII(nums3, k3));