// 215: Kth largest element in an array
// Tested successfully

let nums1 = [3, 2, 1, 5, 6, 4];
let nums2 = [3, 2, 3, 1, 2, 4, 5, 5, 6];




function kLargestElements(nums, k){

    let max_value = nums[0];
    let max_pos = 0;
    let idx_k = 0;
    while(idx_k < k)
    {
        max_value = nums[0];
        max_pos = 0;
        for (let i = 0; i < nums.length; i++)
        {
            if (nums[i] > max_value)
            {
                max_value = nums[i];
                max_pos = i;
                

            }
        }
        idx_k++;

        nums.splice(max_pos, 1)
        
        
    }
    return max_value;
}

console.log(kLargestElements(nums1, 4));
