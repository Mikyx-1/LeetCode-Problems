// 2873. Maximum Value of an Ordered Triplet I
// Tested successfully

// O(n^3)

let nums1 = [12,6,1,2,7], nums2 = [1,10,3,4,19], nums3 = [1,2,3];



function maxValueOfAnOrderedTriplet(nums)
{
    let length  = nums.length;
    let max = 0;
    for (let i = 0; i < length-2; i++)
    {
        for (let j = i+1; j < length-1; j++)
        {
            for (let k = j+1; k < length; k++)
            {
                value = (nums[i] - nums[j])*nums[k] 
                if ( value > max) max = value;
            }
        }
    }
    return max;
}

console.log(maxValueOfAnOrderedTriplet(nums1));
console.log(maxValueOfAnOrderedTriplet(nums2));
console.log(maxValueOfAnOrderedTriplet(nums3));