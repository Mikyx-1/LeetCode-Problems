// 1512. Number of Good pairs
// Tested successfully

nums1 = [1, 2, 3, 1, 1, 3];
nums2 = [1, 1, 1, 1];
nums3 = [1, 2, 3];

function numberOfGoodPairs(nums)
{
    let numPairs = 0;
    for (let i = 0; i < nums.length-1; i++)
    {
        for(let j = i+1; j < nums.length; j++)
        {
            if (nums[i] == nums[j]) numPairs++;
        }
    }

    return numPairs;
}

console.log(numberOfGoodPairs(nums1));
console.log(numberOfGoodPairs(nums2));
console.log(numberOfGoodPairs(nums3));