// 2859. Sum of Values At Indices With K Set Bits
// Tested successfully

let nums1 = [5,10,1,5,2], k1 = 1;
let nums2 = [4,3,2,1], k2 = 2;

function countNumBits(n){
    
    let cnt = 0;
    while(n!=0)
    {
        cnt += n%2;
        n = Math.floor(n/2);
    }
    return cnt;
}


function sumOfValuesAtIndicesWithKSetBits(nums, k)
{
    let sum = 0;
    for (let i = 0; i < nums.length; i++)
    {
        if(countNumBits(i) == k) sum += nums[i];
    }
    return sum;
}
console.log(sumOfValuesAtIndicesWithKSetBits(nums1, k1));
console.log(sumOfValuesAtIndicesWithKSetBits(nums2, k2));