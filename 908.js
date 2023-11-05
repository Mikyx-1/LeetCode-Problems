// 908. Smallest Range I
// Tested successfully


let nums1 = [1], k1 = 0;
let nums2 = [0, 10], k2 = 2;
let nums3 = [1, 3, 6], k3 = 3;



function smallestRangeI(nums, k)
{  
    if(nums.length==1) return 0;
    let avg = Math.ceil(nums.reduce((a, b) => {return a + b})/nums.length);

    for (let i = 0; i < nums.length; i++)
    {
        if (nums[i] > avg){
            if(nums[i] - k <= avg) nums[i] = avg;
            else nums[i] = nums[i] - k;
        }

        if(nums[i] < avg){
            if(nums[i] + k >= avg) nums[i] = avg;
            else nums[i] = nums[i] + k;
        }
    }
    let minDiff = Math.abs(nums[0]-nums[1]);
    for (let i = 0; i < nums.length; i++)
    {
        for (let j = i+1; j<nums.length; j++)
        {
            if (Math.abs(nums[i] - nums[j]) < minDiff) minDiff = Math.abs(nums[i] - nums[j]);
        }
    }
    return minDiff;    
}

console.log(smallestRangeI(nums1, k1));
console.log(smallestRangeI(nums2, k2));
console.log(smallestRangeI(nums3, k3));
