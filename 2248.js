// 2248. Intersection of Multiple Arrays
// Tested successfully

// O(n*m)

let nums1 = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]];
let nums2 = [[1,2,3],[4,5,6]];

function intersectionOfMultipleArray(nums)
{
    let numRows = nums.length;
    let numCols = nums[0].length;
    let dict = {};
    let result = [];

    for (let i = 0; i < numRows; i++)
    {
        for (let j = 0; j < numCols; j++)
        {
            if(dict[nums[i][j]] == null)
            {
                dict[nums[i][j]] = new Set().add(i);
            }
            else{
                if(dict[nums[i][j]] == "done") continue;
                else{
                    dict[nums[i][j]].add(i);
                    if (dict[nums[i][j]].size == numRows)
                    {
                        dict[nums[i][j]] = "done";
                        result.push(nums[i][j]);
                    }
                }
            
            }
        }
    }
    return result;
}

console.log(intersectionOfMultipleArray(nums1));
console.log(intersectionOfMultipleArray(nums2));