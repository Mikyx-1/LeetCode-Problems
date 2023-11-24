// 2553. Seperate The Digits In An Array
// Tested successfully

let nums1 = [13,25,83,77], nums2 = [7,1,3,9];

function separateTheDigitsInAnArray(nums)
{
    let ans = [];
    for(num of nums)
    {
        for (n of num.toString()) ans.push(parseInt(n));
    }
    return ans;
}

console.log(separateTheDigitsInAnArray(nums1));
console.log(separateTheDigitsInAnArray(nums2));