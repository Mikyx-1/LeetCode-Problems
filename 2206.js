// 2206. Divide Array into equal pairs
// Tested successfully

let nums1 = [3, 2, 3, 2, 2, 2]
let nums2 = [1, 2, 3, 4]

function divideArrayIntoEqualPairs(nums)
{   
    let dict = {}
    for(num of nums)
    {
        if(dict[num] == undefined || dict[num] == null) dict[num] = 1;
        else dict[num]++;
    }

    for (let value of Object.values(dict)) if(value%2==1) return false;
    return true;
}

console.log(divideArrayIntoEqualPairs(nums1));
console.log(divideArrayIntoEqualPairs(nums2));