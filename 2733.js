// 2733. Neither Minimum nor Maximum
// Tested successfully

let nums1 = [3, 2, 1, 4], nums2 = [1, 2], nums3 = [2, 1, 3];
let nums4 = [1, 1, 2, 2, 3, 3]


function neitherMinimumOrMaximum(nums)
{
    let length = nums.length;
    if(length <= 2) return -1;
    let max = nums[0];
    let min = nums[0];

    for (let i = 1; i < length; i++)
    {
        if(nums[i] > max) max = nums[i];

        if (nums[i] < min) min = nums[i];
    }

    for (num of nums)
    {
        if(num != max && num != min) return num;
    }
    return -1;
}

console.log(neitherMinimumOrMaximum(nums1));
console.log(neitherMinimumOrMaximum(nums2));
console.log(neitherMinimumOrMaximum(nums3));
console.log(neitherMinimumOrMaximum(nums4));