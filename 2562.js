// 2562. Find the Array Concatenation Value
// Tested successfully

let nums1 = [7,52,2,4], nums2 = [5,14,13,8,12];

function findTheArrayConcatenationValue(nums)
{
    let sum = 0;
    let leftIdx = 0;
    let rightIdx = nums.length - 1;
    while(leftIdx<rightIdx)
    {
        sum += parseInt(nums[leftIdx].toString() + nums[rightIdx].toString());
        leftIdx++;
        rightIdx--;
    }
    if(leftIdx == rightIdx) sum += nums[leftIdx]
    return sum;
}

console.log(findTheArrayConcatenationValue(nums1));
console.log(findTheArrayConcatenationValue(nums2));