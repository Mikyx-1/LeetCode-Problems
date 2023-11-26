// 1608. Special Array With X Elements Greater Than or Equal X
// Tested successfully

let nums1 = [3, 5], nums2 = [0, 0], nums3 = [0,4,3,0,4];

function specialArrayWithXElementsGreaterThanOrEqualX(nums)
{
    let dict = {};
    let minVal = Infinity;
    let maxVal = -1;
    for (let i = 0; i < nums.length; i++)
    {
        if(dict[nums[i]] == null) dict[nums[i]] = 1;
        else dict[nums[i]]++;

        if(nums[i] < minVal) minVal = nums[i];
        if(nums[i] > maxVal) maxVal = nums[i];
    }

    for (let i = minVal - 1; i <= maxVal; i++)
    {
        cnt = 0;
        for(key of Object.keys(dict))
        {
            if(key >= i) cnt+= dict[key];
        }

        if(cnt == i) return i;
    }
    return -1;
}

console.log(specialArrayWithXElementsGreaterThanOrEqualX(nums1));
console.log(specialArrayWithXElementsGreaterThanOrEqualX(nums2));
console.log(specialArrayWithXElementsGreaterThanOrEqualX(nums3));