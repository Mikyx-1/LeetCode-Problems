// 1752. Check If Array is Sorted and Rotated
// Tested successfully

let nums1 = [3,4,5,1,2], nums2 = [2,1,3,4], nums3 = [1,2,3];



function checkIfArrayIsSortedAndRotated(nums)
{
    let cnt = 0;
    let length = nums.length;
    if(nums[0] < nums[length-1]) cnt++;

    for (let i = 1; i < length; i++)
    {
        if(nums[i] < nums[i-1]) cnt++

        if(cnt > 1) return false;
    }

    return true;
}

console.log(checkIfArrayIsSortedAndRotated(nums1));
console.log(checkIfArrayIsSortedAndRotated(nums2));
console.log(checkIfArrayIsSortedAndRotated(nums3));