// 1005. Maximize Sum of Array After K Negations
// Tested Successfully

let nums1 = [4, 2, 3], k1 = 1;
let nums2 = [3, -1, 0, 2], k2 = 3;
let nums3 = [2, -3, -1, 5, -4], k3 = 2;

function maximizeSumOfArrAfterKNegations(nums, k){

    if(k==0) return nums.reduce((a, b) => {return a+b});

    let min = nums[0], minPos = 0;
    for (let i = 0; i < nums.length; i++)
    {
        if(nums[i] < min)
        {
            min = nums[i];
            minPos = i;
        }
    }

    nums[minPos] = -nums[minPos];
    return maximizeSumOfArrAfterKNegations(nums, k-1)
}


console.log(maximizeSumOfArrAfterKNegations(nums1, k1))
console.log(maximizeSumOfArrAfterKNegations(nums2, k2))
console.log(maximizeSumOfArrAfterKNegations(nums3, k3))