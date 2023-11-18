// 2824. Count Pairs Whose Sum is Less than Target
// Tested successfully

// O(n^2)

let nums1 = [-1,1,2,3,1], target1 = 2;
let nums2 = [-6,2,5,-2,-7,-1,3], target2 = -2;

function countPairsWhoseSumIsLessThanTarget(nums, target)
{
    let cnt = 0;
    let length = nums.length;
    for (let i = 0; i < length-1; i++)
    {
        for (let j = i+1; j < length; j++)
        {
            if(nums[i] + nums[j] < target) cnt++;
        }
    }

    return cnt;
}

console.log(countPairsWhoseSumIsLessThanTarget(nums1, target1));
console.log(countPairsWhoseSumIsLessThanTarget(nums2, target2));