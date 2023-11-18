// 2855. Minimum Right Shifts To Sort The array
// Tested successfully

// O(n)

let nums1 = [3, 4, 5, 1, 2], nums2 = [1, 3, 5], nums3 = [2, 1, 4];


function minimumRightShifts(nums)
{
    let length = nums.length;
    for (let i = 1; i < length; i++)
    {
        if (nums[i] < nums[i-1])
        {
            for (let j = i+1; j < length; j++)
            {
                if (nums[j] < nums[j-1]) return -1;
                else if (nums[j] > nums[j-1] && nums[j] > nums[0]) return -1;
            }

            return length - i;
        }
    }
    return 0;
}

console.log(minimumRightShifts(nums1));
console.log(minimumRightShifts(nums2));
console.log(minimumRightShifts(nums3));
