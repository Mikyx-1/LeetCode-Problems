// 1909. Remove 1 element to make the array strictly increasing
// Tested successfully

let nums1 = [1, 2, 10, 5, 7], nums2 = [2, 3, 1, 2], nums3 = [1, 1, 1];

function strictlyIncreasingPossible(nums)
{
    let length = nums.length;
    let expectation = nums[0];
    let firstTime = true;
    for (let i = 1; i < length; i++)
    {
        if(nums[i] > expectation)
        {
            expectation = nums[i];
        }
        else if(nums[i] <= expectation && firstTime == true)
        {
            expectation = nums[i];
            firstTime = false;
        }
        else if (nums[i] <= expectation && firstTime == false)
        {
            return false;
        }
    }
    return true;
}


console.log(strictlyIncreasingPossible(nums1));
console.log(strictlyIncreasingPossible(nums2));
console.log(strictlyIncreasingPossible(nums3));
console.log(strictlyIncreasingPossible([1, 2, 2, 3, 4]));