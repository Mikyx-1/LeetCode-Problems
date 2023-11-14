// 2176. Count Equal and Divisible Pairs in an array
// Tested successfully

let nums1 = [3, 1, 2, 2, 2, 1, 3], k1 = 2;
let nums2 = [1, 2, 3, 4], k2 = 1;


function countEqualAndDivisiblePairsInAnArray(nums, k)
{   
    let length = nums.length;
    let cnt = 0;
    for (let i = 0; i < length-1; i++)
    {
        for(let j = i+1; j < length; j++)
        {
            if(nums[i] == nums[j] && (i*j)%k==0) cnt++; 
        }
    }

    return cnt;
}

console.log(countEqualAndDivisiblePairsInAnArray(nums1, k1));
console.log(countEqualAndDivisiblePairsInAnArray(nums2, k2));