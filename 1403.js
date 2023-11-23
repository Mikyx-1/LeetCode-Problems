// 1403. Minimum Subsequence In Non-Increasing Order
// Tested successfully

let nums1 = [4,3,10,9,8], nums2 = [4,4,7,6,7];

function minimumSubsequenceInNonIncreasingOrder(nums)
{
    nums.sort((a, b) => (a-b))
    let rightIdx = nums.length - 1;
    let rightSum = nums[rightIdx];
    let leftSum = nums.slice(0, -1).reduce((a, b) => {return a + b});

    while(true)
    {
        rightIdx--;
        rightSum += nums[rightIdx];
        leftSum -= nums[rightIdx];
        if(rightSum > leftSum) break;
    }
    return nums.slice(rightIdx, ).reverse();
}

console.log(minimumSubsequenceInNonIncreasingOrder(nums1));
console.log(minimumSubsequenceInNonIncreasingOrder(nums2));
