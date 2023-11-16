// 1748.  Sum of Unique Elements
// Tested successfully

// O(n)

let nums1 = [1, 2, 3, 2];
let nums2 = [1, 1, 1, 1, 1];
let nums3 = [1, 2, 3, 4, 5];

function sumOfUniqueElements(nums)
{
    let dict = {};
    for (num of nums)
    {
        if(dict[num] == null) dict[num] = 1;
        else dict[num]++;
    }
    let sum = 0;
    for (key of Object.keys(dict))
    {
        if(dict[key] == 1) sum += parseInt(key);
    }
    return sum;
}

console.log(sumOfUniqueElements(nums1));
console.log(sumOfUniqueElements(nums2));
console.log(sumOfUniqueElements(nums3));