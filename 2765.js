// 2765. Longest Alternating Subarray
// Tested successfully

let nums1 = [2,3,4,3,4], nums2 = [4,5,6];

function longestAlternatingSubarray(nums)
{
    let currCnt = 1;
    let maxCnt = -1;
    let m = 0;
    let idx = 0;
    if(nums.length <= 1) return -1;

    let running = false;
    while(idx <= nums.length)
    {
        if(nums[idx+1] - nums[idx] == Math.pow(-1, (idx-m)%2) && running==false)
        {
            running = true;
            currCnt++;
            if(currCnt > maxCnt) maxCnt = currCnt;
        }

        else if (nums[idx+1] - nums[idx] == Math.pow(-1, (idx-m)%2) && running == true)
        {
            currCnt++;
            if(currCnt > maxCnt) maxCnt = currCnt;
        }

        else if(nums[idx+1] - nums[idx] != Math.pow(-1, (idx-m)%2) && running == true)
        {
            running = false;
            m = idx;
            idx--;
            currCnt = 1;
        }

        else if(nums[idx+1] - nums[idx] != Math.pow(-1, (idx-m)%2) && running == false)
        {
            running = false;
            m = idx;
            currCnt = 1;
        }

        idx++;
    }
    return maxCnt;
}


console.log(longestAlternatingSubarray([2,3,4,3,4]));
console.log(longestAlternatingSubarray(nums2));

