// 2032. Two Out of Three
// Tested successfully

let nums1 = [1, 1, 3, 2], nums2 = [2, 3], nums3 = [3];
// let nums1 = [3, 1], nums2 = [2, 3], nums3 = [1, 2];
// let nums1 = [1, 2, 2], nums2 = [4, 3, 3], nums3 = [5];



function twoOutOfThree(nums1, nums2, nums3)
{
    let dict = {};
    let ans = [];
    for (num of nums1) dict[num] = [1];
    for (num of nums2)
    {
        if((dict[num] != null || dict[num] != undefined) && dict[num][0] != 2) dict[num].splice(0, 0, 2)
        else dict[num] = [2];
    }

    for (num of nums3)
    {
        if((dict[num] != null || dict[num] != undefined) && dict[num][0] != 3) dict[num].splice(0, 0, 3)
        else dict[num] = [3];
    }

    for (key of Object.keys(dict)) if(dict[key].length > 1) ans.push(key);

    return ans;
}

console.log(twoOutOfThree(nums1, nums2, nums3));