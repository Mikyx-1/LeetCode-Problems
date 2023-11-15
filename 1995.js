// 1995. Count Special Quadruplets
// Tested successfully

let nums1 = [1, 2, 3, 6], nums2 = [3, 3, 6, 4, 5], nums3 = [1, 1, 1, 3, 5];

function countSpecialQuadruplets(nums)
{
    let cnt = 0;
    let length = nums.length;
    for (let i = 0; i < length-3; i++)
    {
        for (let j = i+1; j < length-2; j++)
        {
            for (let k = j+1; k < length-1; k++)
            {
                for (let m = k+1; m < length; m++)
                {
                    if(nums[i]+nums[j] + nums[k] == nums[m]) cnt++;
                }   
            }   
        }   
    }
    return cnt;
}

console.log(countSpecialQuadruplets(nums1));
console.log(countSpecialQuadruplets(nums2));
console.log(countSpecialQuadruplets(nums3));