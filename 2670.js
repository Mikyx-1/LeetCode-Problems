// 2670: Find the distinct difference array
// Tested successfully

let nums1 = [1, 2, 3, 4, 5];
let nums2 = [3, 2, 3, 4, 2];

function distinctDifferenceArray(nums)
{
    let res = [];
    for (let i = 0; i < nums.length; i++)
    {
        let distinctLeft = new Set(nums.slice(0, i+1));
        let distinctRight = new Set(nums.slice(i+1, ));
        res.push(distinctLeft.size - distinctRight.size);
    }

    return res;
}

console.log(distinctDifferenceArray(nums1));
console.log(distinctDifferenceArray(nums2));

