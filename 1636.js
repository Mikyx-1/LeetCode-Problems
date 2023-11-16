// 1636. Sort Array by Increasing Frequency
// Tested successfully

let nums1 = [1, 1, 2, 2, 2, 3], nums2 = [2, 3, 1, 3, 2];
let nums3 = [-1,1,-6,4,5,-6,1,4,1];


function sortArrayByIncreasingFrequency(nums)
{
    let dict = {};
    let freq = [];
    let ans = [];
    for (num of nums)
    {
        if(dict[num] == null) dict[num] = 1;
        else dict[num]++;
    }
    for (key of Object.keys(dict))
    {   
        freq.push([parseInt(key), dict[key]]);
    }
    freq.sort((a, b) => (a[1] - b[1]));
    for (f of freq)
    {
        for (let i = 0; i < f[1]; i++) ans.push(f[0]);
    }
    return ans;
}

console.log(sortArrayByIncreasingFrequency(nums1));
console.log(sortArrayByIncreasingFrequency(nums2));
console.log(sortArrayByIncreasingFrequency(nums3));