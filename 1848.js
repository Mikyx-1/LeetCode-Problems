// 1848. Minimum distance to the target element
// Tested successfully


let nums1 = [1, 2, 3, 4, 5], target1 = 5, start1 = 3;
let nums2 = [1], target2 = 1, start2 = 0;
let nums3 = [1,1,1,1,1,1,1,1,1,1], target3 = 1, start3 = 0;


function minimumDistToTheTargetElement(nums, target, start)
{
    if(nums[start] == target) return 0;

    let leftIdx = start - 1;
    let rightIdx = start + 1;
    let length = nums.length;

    while(true)
    {
        if(leftIdx > -1) if (nums[leftIdx] == target) return start - leftIdx;

        if (rightIdx < length) if (nums[rightIdx] == target) return rightIdx - start;
        
        leftIdx--;
        rightIdx++;
    }
}

console.log(minimumDistToTheTargetElement(nums1, target1, start1));
console.log(minimumDistToTheTargetElement(nums2, target2, start2));
console.log(minimumDistToTheTargetElement(nums3, target3, start3));
