// 1437. Check if All 1's Are at Least Length K Places Away
// Tested successfully

let nums1 = [1, 0, 0, 0, 1, 0, 0, 1], k1 = 2;
let nums2 = [1,0,0,1,0,1], k2 = 2;

function check(nums, k)
{
    let last_1_position = null;

    for (let i = 0; i < nums.length; i++)
    {
        if(last_1_position == null && nums[i] == 1)
        {
            last_1_position = i;
        }

        else if (last_1_position != null && nums[i] == 1)
        {
            if(i - last_1_position - 1 < k) return false;
            else last_1_position = i;
        }
    }

    return true;
}

console.log(check(nums1, k1));
console.log(check(nums2, k2));
