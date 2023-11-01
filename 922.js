// 922. Sort Array by Parity II
// Tested successfully


let nums1 = [4, 2, 5, 7], nums2 = [2, 3];
let nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function findIdx(nums, startIdx, option="odd")
{
    if(option == "odd")
    {
        for (let i = startIdx; i < nums.length; i++)
        {
            if (nums[i]%2!=0) return [i, nums[i]];
        }
        return [null, null];
    }

    else{
        for (let i = startIdx; i < nums.length; i++)
        {
            if (nums[i]%2==0) return [i, nums[i]];
        }

        return [null, null];
    }
}

function paritySort(nums)
{
    let [idx, val] = findIdx(nums, 3, "even")
    for (let i = 0; i < nums.length; i++)
    {
        if(i%2==0 && nums[i]%2!=0)
        {
            let [idx, val] = findIdx(nums, i, "even");
            if(idx!= null && val != null)
            {
                cache = nums[i];
                nums[i] = val;
                nums[idx] = cache;
            }
            console.log(idx, val)
        }

        if(i%2!=0 && nums[i]%2 ==0)
        {
            let [idx, val] = findIdx(nums, i, "odd")
            if(idx != null && val != null)
            {
                cache = nums[i];
                nums[i] = val;
                nums[idx] = cache;
            }
        }
    }

    return nums;
}

console.log(paritySort(nums3));
// console.log(findIdx(nums1, 1, "odd"))