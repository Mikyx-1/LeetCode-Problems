// Two Sum: Backtracking
// Tested successfully


let nums1 = [2, 7, 11, 15];
let target1 = 9;

let nums2 = [3, 2, 4];
let target2 = 6;

let nums3 = [3, 3];
let target3 = 6;

function twoSum(nums, target)
{
    let results = [];

    function dfs(start_idx, subNums)
    {
        if (subNums.length == 2)
        {
            let sum = subNums.reduce((a, b) => {return a + b;});
            if(sum == target) results.push(subNums.slice());
            return;
        }

        for(let i = start_idx; i < nums.length; i++)
        {
            subNums.push(nums[i]);
            dfs(i+1, subNums);
            subNums.pop();   
        }
    }

    dfs(0, []);
    return results;
}

console.log(twoSum(nums1, target1));
console.log(twoSum(nums2, target2));
console.log(twoSum(nums3, target3));