// 2540. Minimum Common Value
// Tested successfully

// O(n*m)

// let nums1 = [1,2,3], nums2 = [2,4];
let nums1 = [1,2,3,6], nums2 = [2,3,4,5];

function minimumCommonValue(nums1, nums2)
{
    for (num1 of nums1)
    {
        for (num2 of nums2)
        {
            if(num1==num2) return num1;
        }
    }
    return -1;
}

console.log(minimumCommonValue(nums1, nums2));
