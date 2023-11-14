// 2089. Find Target Indices After Sorting Array
// Tested successfully

let nums1 = [1, 2, 5, 2, 3], target1 = 2;
let nums2 = [1, 2, 5, 2, 3], target2 = 3;
let nums3 = [1, 2, 5, 2, 3], target3 = 5;

function findTargetIndicesAfterSortingArray(nums, target)
{
    let sortedNums = nums.sort();
    let idx = sortedNums.indexOf(target);
    let ans = []
    for(let i = idx; i < nums.length; i++)
    {
        if(sortedNums[i] == target) ans.push(i);
    }

    return ans;
}


console.log(findTargetIndicesAfterSortingArray(nums1, target1));
console.log(findTargetIndicesAfterSortingArray(nums2, target2));
console.log(findTargetIndicesAfterSortingArray(nums3, target3));