// 2099. Find Subsequence Of Length K With The Largest Sum
// Tested successfully

let nums1 = [2,1,3,3], k1 = 2;
let nums2 = [-1,-2,3,4], k2 = 3;
let nums3 = [3,4,3,3], k3 = 2;

function findSubsequenceOfLengthKWithTheLargestSum(nums, k)
{
    nums.sort((a, b) => (b - a));
    return nums.slice(0, k).reverse();
}

console.log(findSubsequenceOfLengthKWithTheLargestSum(nums1, k1));
console.log(findSubsequenceOfLengthKWithTheLargestSum(nums2, k2));
console.log(findSubsequenceOfLengthKWithTheLargestSum(nums3, k3));