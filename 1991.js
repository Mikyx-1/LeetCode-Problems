// 1991. Find the Middle Index in Array
// TEsted successfully

let nums1 = [2,3,-1,8,4], nums2 = [1,-1,4], nums3 = [2,5];


function findMiddleIndexInArray(nums)
{

    let length = nums.length;
    if(length == 1){
        if(nums[0] == 0) return 0;
        return -1;
    }

    let sum1 = 0;
    let sum2 = nums[1];
    for (let i = 2; i < length; i++) sum2 += nums[i];

    let idx = 0;
    while(true)
    {
        if(sum1==sum2) return idx;
        if(idx == length-1) break;
        sum1 += nums[idx];
        sum2 -= nums[idx+1];
        idx++;
    }
    return -1;
}

console.log(findMiddleIndexInArray(nums1));
console.log(findMiddleIndexInArray(nums2));
console.log(findMiddleIndexInArray(nums3));