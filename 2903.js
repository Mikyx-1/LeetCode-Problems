// Find indices with index and value difference I
// Tested successfully

let nums1 = [5,1,4,1], indexDifference1 = 2, valueDifference1 = 4;
let nums2 = [2,1], indexDifference2 = 0, valueDifference2 = 0;
let nums3 = [1,2,3], indexDifference3 = 2, valueDifference3 = 4;


function findIndicesWithIndexAndValueDifferenceI(nums, indexDifference, valueDifference)
{
    let length = nums.length;

    for (let i = 0; i < length; i++)
    {
        for (let j = i; j < length; j++)
        {
            if(Math.abs(i-j) >= indexDifference && Math.abs(nums[i] - nums[j]) >= valueDifference)
            {
                return [i, j];
            }
        }
    }

    return [-1, -1];
}

console.log(findIndicesWithIndexAndValueDifferenceI(nums1, indexDifference1, valueDifference1));
console.log(findIndicesWithIndexAndValueDifferenceI(nums2, indexDifference2, valueDifference2));
console.log(findIndicesWithIndexAndValueDifferenceI(nums3, indexDifference3, valueDifference3));