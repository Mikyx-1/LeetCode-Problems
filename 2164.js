// 2164. Sort Even and Odd Indices Independently
// Tested successfully

// O(nlogn)

let nums1 = [4, 1, 2, 3], nums2 = [2, 1];

function sortEvenAndOddIndicesIndependently(nums)
{
    let evenIndices = [];
    let oddIndices = [];
    let length = nums.length;
    let ans = [];
    for (let i = 0; i < length; i++)
    {
        if(i%2==0) evenIndices.push(nums[i]);
        else oddIndices.push(nums[i]);
    }
    evenIndices.sort((a, b) => (a-b));
    oddIndices.sort((a, b) => (b-a));

    for (let i = 0; i < length/2; i++)
    {
        ans.push(evenIndices[i]);
        ans.push(oddIndices[i]);
    }

    return ans;
}

console.log(sortEvenAndOddIndicesIndependently(nums1));
console.log(sortEvenAndOddIndicesIndependently(nums2));