// 1822. Sign of the Product of an array
// Tested successfully

let nums1 = [-1,-2,-3,-4,3,2,1], nums2 = [1,5,0,2,-3];
let nums3 = [-1,1,-1,1,-1];

function sign(n)
{
    if(n<0) return -1
    else if (n>0) return 1;
    return 0;
}

function signOfTheProductOfAnArray(nums)
{
    let currSign = sign(nums[0]);
    for(let i = 1; i < nums.length; i++)
    {
        currSign = currSign * sign(nums[i]);
    }
    return currSign;
}

console.log(signOfTheProductOfAnArray(nums1));
console.log(signOfTheProductOfAnArray(nums2));
console.log(signOfTheProductOfAnArray(nums3));