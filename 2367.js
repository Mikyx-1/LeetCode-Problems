// 2367. Number of Arithmetic Triplets
// Tested successfully

let nums1 = [0,1,4,6,7,10], diff1 = 3;
let nums2 = [4,5,6,7,8,9], diff2 = 2;

function numberOfArithmeticTriplets(nums, diff)
{
    let length = nums.length;
    let cnt = 0;
    for (let i = 0; i < length-2; i++)
    {
        for (let j = i+1; j < length-1; j++)
        {
            for (let k = j+1; k < length; k++)
            {
                if(nums[j] - nums[i] == diff && nums[k] - nums[j] == diff)  cnt++;
            }
        }
    }
    return cnt;
}

console.log(numberOfArithmeticTriplets(nums1, diff1));
console.log(numberOfArithmeticTriplets(nums2, diff2));