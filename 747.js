// 747. Largest Number At Least Twice of Others
// Tested successfully

let nums1 = [3, 6, 1, 0], nums2 = [1, 2, 3, 4];

function largestNumberAtLeastTwiceOfOthers(nums)
{
    let max = nums[0], maxPos = 0;
    let size = nums.length
    for(let i = 1; i < size; i++)
    {
        if(nums[i] > max)
        {
            max = nums[i];
            maxPos = i;
        }
    }

    for (let i = 0; i < size; i++)
    {
        if(nums[i] == 0 && i != maxPos) continue;
        if(max/nums[i] < 2.0 && i != maxPos) return false;
    }
    return true;
}

console.log(largestNumberAtLeastTwiceOfOthers(nums1));
console.log(largestNumberAtLeastTwiceOfOthers(nums2));