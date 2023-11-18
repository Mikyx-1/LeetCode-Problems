// 2932. Mximum Strong Pair XOR I
// Tested successfully

// O(n^2)

let nums1 = [1,2,3,4,5], nums2 = [10,100], nums3 = [5,6,25,30];

function maximumStrongPairXORI(nums)
{
    let max = 0;
    let length = nums.length;
    for (let i = 0; i < length-1; i++)
    {
        for (let j = i+1; j < length; j++)
        {
            if(Math.abs(nums[i] -  nums[j]) <= Math.min(nums[i], nums[j]))
            {
                xorVal = nums[i]^nums[j];
                if(xorVal > max) max = xorVal;
            }
        }
    }
    return max;
}

console.log(maximumStrongPairXORI(nums1));
console.log(maximumStrongPairXORI(nums2));
console.log(maximumStrongPairXORI(nums3));