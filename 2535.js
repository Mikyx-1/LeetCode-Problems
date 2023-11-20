// 2535. Difference Between Element Sum and Digit Sum of An Array
// Tested successfully

let nums1 = [1, 15, 6, 3];
let nums2 = [1, 2, 3, 4];

function digitSum(num)
{
    if(Math.floor(num/10) == 0) return num%10;
    
    digit = num%10;
    return digit + digitSum(Math.floor(num/10));
}


function solve(nums)
{
    let arrSum = 0;
    let runningDigitSum = 0;
    for (num of nums)
    {
        arrSum += num;
        runningDigitSum += digitSum(num);
    }
    return Math.abs(arrSum - runningDigitSum);
}

console.log(solve(nums1));
console.log(solve(nums2));