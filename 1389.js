// 1389. Create target array in the given order
// Tested successfully

let nums1 = [0, 1, 2, 3, 4], index1 = [0, 1, 2, 2, 1];
let nums2 = [1, 2, 3, 4, 0], index2 = [0, 1, 2, 3, 0];


function createTargetArr(nums, indexes)
{   
    let result  = [];
    for (let i = 0; i < indexes.length; i++)
    {
        result.splice(indexes[i], 0, nums[i]);
    }
    return result;
}



console.log(createTargetArr(nums1, index1));
console.log(createTargetArr(nums2, index2));
