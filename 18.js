// 4Sum
// Tested successfully

let nums1 = [1, 0, -1, 0, -2, 2];
let target1 = 0;

let nums2 = [2, 2, 2, 2, 2];
let target2 = 8;


function fourSum(nums, target)
{
    let results = [];

    function dfs(start_idx, subNums)
    {
        if(subNums.length == 4) 
        {
            let sum = subNums.reduce((a, b) => {return a+b})

            if(sum==target) results.push(subNums.slice());
            
            return;
        }

        for(let i = start_idx; i < nums.length; i++)
        {
            if(i > start_idx && nums[i] == nums[i-1]) continue;

            subNums.push(nums[i]);
            dfs(i+1, subNums);
            subNums.pop();
        }
    }

    nums.sort((a, b) => a - b);
    dfs(0, []);
    return results;
}

console.log(fourSum(nums1, target1));
console.log(fourSum(nums2, target2));

