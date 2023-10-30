// 1018. Binary Prefix Divisible By 5
// Tested successfully

let nums1 = [0, 1, 1];
let nums2 = [1, 1, 1];

function binaryPrefixDivisibleBy5(nums)
{
    let length = nums.length;
    let sum = 0;
    let result = [];
    for (let i = 0; i<length; i++)
    {
        sum = sum + nums[i]*Math.pow(2, length-1-i);
        if(sum%5==0) result.push(true);
        else result.push(false);
    }

    return result;
}

console.log(binaryPrefixDivisibleBy5(nums1));
console.log(binaryPrefixDivisibleBy5(nums2));
console.log(binaryPrefixDivisibleBy5([1, 1, 0, 0, 1]));