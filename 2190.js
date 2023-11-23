// 2190. Most Frequent Number Following Key In An Array
// Tested successfully

let nums1 = [1,100,200,1,100], key1 = 1;
let nums2 = [2,2,2,2,3], key2 = 2;

function mostFrequentNumberFollowingKey(nums, key)
{
    let dict = {};
    let maxFrequentTarget = -1;
    let ans = null;
    for (let i = 0; i < nums.length-2; i++)
    {
        if(nums[i] == key)
        {
            if(dict[nums[i+1]] == null) dict[nums[i+1]] = 1;
            else dict[nums[i+1]]++;

            if (dict[nums[i+1]] > maxFrequentTarget) 
            {
                maxFrequentTarget = dict[nums[i+1]];
                ans = nums[i+1];
            }
        }
    }
    return ans;
}

console.log(mostFrequentNumberFollowingKey(nums1, key1));
console.log(mostFrequentNumberFollowingKey(nums2, key2));