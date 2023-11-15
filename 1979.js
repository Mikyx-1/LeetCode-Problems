// 1979. Find Greatest Common Divisor of Array
// Tested successfully

let nums1 = [2, 5, 6, 9, 10], nums2 = [7, 5, 6, 8, 3], nums3 = [3, 3];

function GCD(a, b)
{
    if (b==0) return a;
    return GCD(b, a%b);
}

function findGCDOfArr(nums)
{
    let min = nums[0];
    let max = nums[1];
    for (num of nums)
    {
        if(num<min) min = num;
        if(num > max) max = num;
    }

    return GCD(min, max);
}

console.log(findGCDOfArr(nums1));
console.log(findGCDOfArr(nums2));
console.log(findGCDOfArr(nums3));