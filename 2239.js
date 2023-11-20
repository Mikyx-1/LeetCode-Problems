// 2239. Find Closest Number to Zero
// Tested successfully

let nums1 = [-4,-2,1,4,8];
let nums2 = [2,-1, 1];

function findCLosestNumberToZero(nums)
{
    let minDiff = Infinity;
    let closestNum = nums[0];
    for (num of nums)
    {
        diff = Math.abs(num);
        if(diff < minDiff) {
            minDiff = diff;
            closestNum = num;
        }
        else if (diff == minDiff)
        {
            if (closestNum < num) closestNum = num;
        }
    }
    return closestNum;
}

console.log(findCLosestNumberToZero(nums1));
console.log(findCLosestNumberToZero(nums2));