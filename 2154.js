// 2154. Keep Multiplying Found Values by 2
// Tested successfully

let nums1 = [5, 3, 6, 1, 12], original1 = 3;
let nums2 = [2, 7, 9], original2 = 4;

function keepMultiplyingFoundValues(nums, original)
{   
    let idx = nums.indexOf(original)
    if(idx == -1) return original;

    return keepMultiplyingFoundValues(nums, original*2);
}

console.log(keepMultiplyingFoundValues(nums1, original1));
console.log(keepMultiplyingFoundValues(nums2, original2));