// 905: Sort Array by Parity
// Tested successfully


let nums1 = [3, 1, 2, 4];
let nums2 = [0];


function sortArrayByParity(nums)
{
    let results = [];
    for (let i = 0; i < nums.length; i++)
    {
        if(nums[i]%2==0) results.splice(0, 0, nums[i]);

        else results.push(nums[i])
    }
    return results;
}


console.log(sortArrayByParity(nums1));
console.log(sortArrayByParity(nums2));