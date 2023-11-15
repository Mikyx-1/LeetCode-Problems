// 2006. Count Number of Pairs With Absolute Difference K

let nums1 = [1, 2, 2, 1], k1 = 1; 
let nums2 = [1, 3], k2 = 3;
let nums3 = [3, 2, 1, 5, 4], k3 = 2;

function countPairs(nums, k)
{   
    let cnt = 0;
    let length = nums.length;
    for (let i = 0; i < length-1; i++)
    {
        for(let j = i+1; j < length; j++)
        {
            if(Math.abs(nums[i] - nums[j]) == k) cnt++;
        }
    }
    return cnt;
}


console.log(countPairs(nums1, k1));
console.log(countPairs(nums2, k2));
console.log(countPairs(nums3, k3));