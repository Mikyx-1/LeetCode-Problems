// 2778. Sum of Squares Of Special Elements
// Tested successfully

let nums1 = [1,2,3,4], nums2 = [2,7,1,19,18,3];


function sumOfSquaresOfSpecialElements(nums)
{
    let sum = 0;
    let length = nums.length;
    for (let i = 0; i < length; i++)
    {
        if (length%(i+1)==0) sum = sum +  nums[i]*nums[i];
    }
    return sum;
}

console.log(sumOfSquaresOfSpecialElements(nums1));
console.log(sumOfSquaresOfSpecialElements(nums2));