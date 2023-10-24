// 350. Intersection of Two Arrays II
// Tested successfully

// nums1 = [1, 2, 2, 1]
// nums2 = [2, 2]

nums1 = [4, 9, 5]
nums2 = [9, 4, 9, 8, 4]

function hashMapList(nums)
{
    let dict = {};
    for (let num of nums)
    {
        if (dict[num] == null || dict[num] == undefined) dict[num] = 1;
        else dict[num]++;
    }
    return dict;
}

function intersectionOf2Arrs(nums1, nums2)
{
    let dict1 = hashMapList(nums1);
    let dict2 = hashMapList(nums2);
    let result = [];

    for (let key of Object.keys(dict1))
    {
        if (dict2[key])
        {
            intersection = Math.min(dict1[key], dict2[key]);
            for (let i = 0; i < intersection; i++)
            {
                result.push(key);
            }
        }
    }

    return result;
}

console.log(intersectionOf2Arrs([1, 4, 9, 7, 13, 25, -1, 13, 13], [-1, 4, 25, 13, 13, 13]));