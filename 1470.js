// 1470. Shuffle the Array
// Tested successfully but not in-place operation

let nums1 = [2, 5, 1, 3, 4, 7];
let nums2 = [1, 2, 3, 4, 4, 3, 2, 1];
let nums3 = [1, 1, 2, 2];

function shuffleArr(nums)
{
    let res = [];
    let first_half = nums.slice(0, nums.length/2);
    let final_half = nums.slice(nums.length/2, );
    for (let i =0; i < nums.length/2; i++)
    {
        res.push(first_half[i]);
        res.push(final_half[i]);
    }

    return res;
}


console.log(shuffleArr(nums1))
console.log(shuffleArr(nums2))
console.log(shuffleArr(nums3))