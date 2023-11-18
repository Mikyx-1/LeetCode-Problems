// 2908.  Minimum Sum of Mountain Triplets I
// Tested successfully

let nums1 = [8,6,1,5,3], nums2 = [5,4,8,7,10,2], nums3 = [6,5,4,3,4,5];

function minSumOfMountainTripletsI(nums)
{
    let length = nums.length;
    let min = Infinity;
    let flag= false;
    for (let i = 0; i < length-2; i++)
    {
        for (let j = i+1; j < length-1; j++)
        {
            for (let k = j+1; k < length; k++)
            {
                if(nums[j] > nums[i] && nums[j] > nums[k])
                {   
                    sum = nums[i] + nums[j] + nums[k];
                    if(sum < min) min = sum;
                    flag = true;
                }
            }
        }
    }
    if (flag) return min;
    return -1;
}

console.log(minSumOfMountainTripletsI(nums1));
console.log(minSumOfMountainTripletsI(nums2));
console.log(minSumOfMountainTripletsI(nums3));