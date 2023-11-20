// 2341. Maximum Number of Pairs In Array
// Tested successfully

let nums1 = [1,3,2,1,3,2,2];
let nums2 = [1,1];
let nums3 = [0];

function maximumNumberOfPairsInArray(nums)
{
    let dict = {};
    for (num of nums)
    {
        if(dict[num] == null) dict[num] = 1;
        else dict[num]++;
    }

    let numPairs = 0;
    let numLeft = 0;
    for (value of Object.values(dict))
    {
        numPairs += Math.floor(value/2);
        numLeft += value%2;
    }
    return [numPairs, numLeft];
}

console.log(maximumNumberOfPairsInArray(nums1));
console.log(maximumNumberOfPairsInArray(nums2));
console.log(maximumNumberOfPairsInArray(nums3));