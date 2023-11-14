// 2215. Find the difference of 2 arrays
// Tested successfully

let nums1 = [1, 2, 3]
let nums2 = [2, 4, 6]

function createDict(nums)
{
    let dict = {};
    for (let num of nums) dict[num] = 1;
    return dict;
}

function findDifferenceOf2Arrs(nums1, nums2)
{
    let dict1 = createDict(nums1);
    let dict2 = createDict(nums2);

    let answer = [[], []];
    for (key of Object.keys(dict1))
    {
        if(dict2[key] == null || dict2[key] == undefined) answer[0].push(parseInt(key));
    }

    for (key of Object.keys(dict2))
    {
        if(dict1[key] == null || dict1[key] == undefined) answer[1].push(parseInt(key));
    }

    return answer;
}

console.log(findDifferenceOf2Arrs(nums1, nums2));
console.log(findDifferenceOf2Arrs([1, 2, 3, 3], [1, 1, 2, 2]));