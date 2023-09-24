// 2815: Max Pair Sum in an Array


// Step 1: Convert to string and check symmetric
// Step 2: As normal

// Tested successfully


let nums1 = [51, 71, 17, 24, 42];
let nums2 = [1, 2, 3, 4];
let nums3 = [1, 2, 3, 4]

function maxPairSum(nums)
{
    function check(sum)
    {
        let sumInString = sum.toString();
        if (sumInString.length%2==0)
        {
            let firstHalf = sumInString.slice(0, Math.floor(sumInString.length/2)).split("").map(item => parseInt(item, 10));
            let lastHalf = sumInString.slice(Math.floor(sumInString.length/2), ).split("").map(item => parseInt(item, 10));
            if (Math.max(...firstHalf) == Math.max(...lastHalf))
            {
                return true;
            }
            return false;
        }
        return false;
    }

    function returnMaxPairSum(nums){
        let maxValue = -1;
        for (let i = 0; i < nums.length; i++)
        {
            for (let j = 0; j < nums.length; j++)
            {
                if(i!=j && check(nums[i] + nums[j]) && nums[i] + nums[j] > maxValue){
                    maxValue = nums[i] + nums[j];
                }
            }
        }

        return maxValue;
    }

    return returnMaxPairSum(nums);
}

console.log(maxPairSum(nums1));
console.log(maxPairSum(nums2));