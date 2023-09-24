// 1365: How many numbers are smaller than the current number
// Tested successfully

let nums1 = [8, 1, 2, 2, 3];
let nums2 = [6, 5, 4, 8];
let nums3 = [7, 7, 7, 7];


function numSmaller(nums)
{
    let res = Array(nums.length).fill(0);
    for (let i = 0; i < nums.length; i++)
    {
        for (j = 0; j < nums.length; j++)
        {
            if (nums[j] < nums[i])
            {
                res[i]++;
            }
        }
    }
    return res;
}


console.log(numSmaller(nums1));
console.log(numSmaller(nums2));
console.log(numSmaller(nums3));
