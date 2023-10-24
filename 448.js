// 448. Find all numbers disappeared in an array
// Tested successfully

let nums1 = [4, 3, 2, 7, 8, 2, 3, 1];
let nums2 = [1, 1];

function findAllNumbersDisappeared(nums)
{   
    let dict = {};
    let result = [];
    for (let i = 1; i < nums.length+1; i++)
    {
        dict[i] = 1;
    }

    for (let num of nums)
    {
        dict[num]--;
        if (dict[num] != undefined || dict[num] != null)
        {
            if (dict[num] <= 0);
        }
        
    }

    for (let key of Object.keys(dict)){
        if (dict[key] == 1) result.push(key);
    }
    return result;
}

console.log(findAllNumbersDisappeared(nums1));
console.log(findAllNumbersDisappeared(nums2));