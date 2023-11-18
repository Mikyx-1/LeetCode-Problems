// 2784. Check if Array is Good
// Tested successfully

// O(n)

// Need space improvement

let nums1 = [2, 1, 3], nums2 = [1, 3, 3, 2], nums3 = [1, 1], nums4= [3, 4, 4, 1, 2, 1];


function findMax(nums)
{
    let max = nums[0];
    let length = 0;
    for (num of nums)
    {
        length++;
        if(num > max) max = num;
    }
    return [max, length];
}

function checkGood(nums)
{
    let [max, length] = findMax(nums);

    let dict = {};
    for (let num of nums)
    {
        if (dict[num] == null) dict[num] = 1;
        else dict[num]++;

        if(dict[num] == 2 && num != max) return false;
    }
    if (dict[max] != 2) return false;
    return true;
}

console.log(checkGood(nums1));
console.log(checkGood(nums2));
console.log(checkGood(nums3));
console.log(checkGood(nums4));