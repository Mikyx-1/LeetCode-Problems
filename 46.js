// 46: Permutations
// Tested Successfully

let nums1 = [1, 2, 3];
let nums2 = [0, 1];
let nums3 = [1];


function permutations(nums)
{
    let results = [];
    

    function permute(arr, permutingArr)
    {
        if(permutingArr.length == 2)
        {
            results.push(arr.concat([permutingArr[0], permutingArr[1]]));
            results.push(arr.concat([permutingArr[1], permutingArr[0]]));
            return;
        }

        for (let i = 0; i < permutingArr.length; i++)
        {
            permute([permutingArr[i]], permutingArr.slice(0, i).concat(permutingArr.slice(i+1, )));
        }
    }

    if(nums.length == 1) return [[nums[0]]];
    permute([], nums);

    return results;
}


console.log(permutations(nums1));
console.log(permutations(nums2));
console.log(permutations(nums3));