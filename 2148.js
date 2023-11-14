// 2148. Count Elements With Strictly Smaller and Greater Elements
// Tested successfully

let nums1 = [11, 7, 2, 15], nums2 = [-3, 3, 3, 90];

function countElementsWithStrictlySmallerAndGreaterElements(nums)
{
    let cnt = 0, minVal = nums[0], maxVal = nums[1];
    for (num of nums)
    {
        if(num < minVal) minVal = num;
        if(num > maxVal) maxVal = num;
    }

    for (num of nums)
    {
        if(num < maxVal && num > minVal) cnt++;
    }

    return cnt;
}

console.log(countElementsWithStrictlySmallerAndGreaterElements(nums1));
console.log(countElementsWithStrictlySmallerAndGreaterElements(nums2));