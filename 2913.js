// 2913. Subarrays Distinct Element Sum of Squares I
// Tested successfully

// Need Improvement

let nums1 = [1, 2, 1], nums2 = [1, 1];

function extractArr(nums, window_size){
    let ans = 0;
    for (let i = 0; i < nums.length - window_size + 1; i++)
    {
        let set = new Set();
        for (let j = i; j < i + window_size; j++) set.add(nums[j]);
        ans += Math.pow(set.size, 2);
    }
    return ans;
}

function subarraysDistinctElementSumOfSquaresI(nums)
{

    let window_size = 1;
    let length = nums.length;
    let ans = 0;
    while(window_size <= length)
    {
        ans += extractArr(nums, window_size);
        window_size++;
    }
    return ans;
}

console.log(subarraysDistinctElementSumOfSquaresI(nums1));
console.log(subarraysDistinctElementSumOfSquaresI(nums2));