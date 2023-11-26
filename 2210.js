// 2210. Count Hills And Valleys in an Array
// Tested successfully

let nums1 = [2,4,1,1,6,5], nums2 = [6,6,5,5,4,1];

function countHillsAndValleysInAnArray(nums)
{
    let total = 0;
    let inValley = false;
    for (let i = 1; i < nums.length-1; i++)
    {
        if(nums[i] > nums[i-1] && nums[i] > nums[i+1]) total++;
        
        if(nums[i] == nums[i+1] && nums[i] < nums[i-1])
        {
            inValley = true;
        }
        else if(nums[i] < nums[i+1] && inValley==true)
        {
            inValley = false;
            total++;
        }
    }

    return total;
}

console.log(countHillsAndValleysInAnArray(nums1));
console.log(countHillsAndValleysInAnArray(nums2));