// 2057. Smallest Index with Equal value
// Tested successfully

let nums1 = [0, 1, 2], nums2 = [4, 3, 2, 1], nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function smallestIndexWithEqualValue(nums)
{
    for(let i = 0; i < nums.length; i++)
    {
        if(nums[i] == i%10) return i;
    }
    return -1;
}

console.log(smallestIndexWithEqualValue(nums1));
console.log(smallestIndexWithEqualValue(nums2));
console.log(smallestIndexWithEqualValue(nums3));