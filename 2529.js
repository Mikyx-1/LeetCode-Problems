// 2529. Maximum Count of Positive Integer
// Tested successfully

let nums1 = [-2,-1,-1,1,2,3], nums2 = [-3,-2,-1,0,0,1,2], nums3 = [5,20,66,1314];

function maximumCountOfPositiveInteger(nums)
{
    let num0s = 0;
    for (let i = 0; i < nums.length; i++)
    {
        if(nums[i] == 0) num0s++;
        
        if(nums[i] > 0) return Math.max(nums.length - i, i - num0s);
    }
    return nums.length;
}

console.log(maximumCountOfPositiveInteger(nums1));
console.log(maximumCountOfPositiveInteger(nums2));
console.log(maximumCountOfPositiveInteger(nums3));