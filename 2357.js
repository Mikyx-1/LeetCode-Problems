// 2357. Make Array Zero by Subtracting Equal Amounts
// Tested successfully

let nums1 = [1, 5, 0, 3, 5];
let nums2 = [0];




function makeArrZero(nums)
{
    let cnt = 0;
    let sum = 0;
    let currMinVal = Infinity;
    for (let i = 0; i < nums.length; i++)
    {
        if(nums[i] < currMinVal && nums[i] != 0) currMinVal = nums[i];
        sum += nums[i];
    }

    while(sum!=0)
    {
        sum = 0;
        let nextMinVal = Infinity;
        for (let i = 0; i < nums.length; i++)
        {
            if (nums[i] != 0) nums[i] -= currMinVal;
            sum += nums[i];
            if(nums[i] < nextMinVal && nums[i] != 0) nextMinVal = nums[i];
        }
        currMinVal = nextMinVal;
        cnt++;
    }
    return cnt;
}

console.log(makeArrZero(nums1));
console.log(makeArrZero(nums2));
