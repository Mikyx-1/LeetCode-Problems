// 922. Sort Array by Parity II
// Not yet finished

// [1, 3, 5, 2, 4, 6] -> [1, 2, 3, 4, 5, 6] -> [2, 1, 4, 3, 6, 5]
// [2, 4, 6, 9, 11, 13]
let nums1 = [4, 2, 5, 7]; // -> [2, 4, 5, 7] -> [2, 5, 4, 7]
let nums2 = [2, 3];


function findIdxes(nums)
{
    let minOdd = Infinity;
    let minEven = Infinity;
    let posOdd = null;
    let posEven = null;

    for (let i = 0; i < nums.length; i++)
    {
        if (nums[i]%2==0)
        {
            if(nums[i] < minEven) {
                minEven = nums[i];
                posEven = i;
            }
        }

        if(nums[i]%2==1)
        {
            if(nums[i] < minOdd)
            {
                minOdd = nums[i];
                posOdd = i;
            }
        }
    }

    return [minEven, posEven, minOdd, posOdd]; 
}


function sortArraybyParityII(nums, startIdx=0)
{   
    if (startIdx == nums.length) return nums;


    let [minEven, posEven, minOdd, posOdd] = findIdxes(nums.slice(startIdx, ));

    posEven += startIdx;
    posOdd += startIdx;


    if (posEven != null)
    {
        cache1 = nums[startIdx];
        nums[startIdx] = minEven;
        nums[posEven] = cache1;
    }

    if(posOdd != null)
    {
        cache2 = nums[startIdx+1];
        nums[startIdx+1] = minOdd;
        nums[posOdd] = cache2;
    }



    return sortArraybyParityII(nums, startIdx+2)
}



// 
// console.log(findIdxes([1, 2, 3, 4, 5, 6]));
console.log(sortArraybyParityII([11, 13, 15, 2, 4, 40]));
// console.log(sortArraybyParityII([1, 2, 3, 4, 5, 6]))