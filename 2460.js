// 2460. Apply Operations to an Array
// Tested successfully

let nums1 = [1,2,2,1,1,0], nums2 = [0, 1];


function applyOperationsToAnArray(nums)
{
    let nonZeros = [];
    let zeros = [];
    for (let i = 0; i < nums.length; i++)
    {

        if (nums[i] == 0)
        {
            zeros.push(0);
        }
        else
        {
            if(nums[i] == nums[i+1]) {
                nums[i] *= 2;
                nums[i+1] = 0;
                zeros.push(0);
                nonZeros.push(nums[i]);
                i++;
            }
            else{
                nonZeros.push(nums[i]);
            }
        }
    }

    return nonZeros.concat(zeros);
}

console.log(applyOperationsToAnArray(nums1));
console.log(applyOperationsToAnArray(nums2));