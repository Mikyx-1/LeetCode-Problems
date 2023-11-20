// 1920. Build Array from Permutation
// Tested successfully

let nums1 = [0,2,1,5,3,4], nums2 = [5,0,1,2,3,4];

function buildArrayFromPermutation(nums)
{
    let length = nums.length;
    let ans = [];
    for (let i = 0; i < length; i++) ans.push(nums[nums[i]]);
    return ans;
}

console.log(buildArrayFromPermutation(nums1));
console.log(buildArrayFromPermutation(nums2));