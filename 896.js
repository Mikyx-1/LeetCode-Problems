// 896: Monotonic Array
// Tested successfully

let nums1 = [1, 2, 2, 3];
let nums2 = [6, 5, 4, 4];
let nums3 = [1, 3, 2];




function checkMonotonicArr(nums)
{   
    if(nums.length < 2) return true;

    let sign = 1;
    if(nums[1] - nums[0] < 0) sign = -1;
    for(let i = 1; i < nums.length-1; i++)
    {
        if((nums[i+1] - nums[i])*sign < 0) return false;
    }

    return true;
}

console.log(checkMonotonicArr(nums1));
console.log(checkMonotonicArr(nums2));
console.log(checkMonotonicArr(nums3));