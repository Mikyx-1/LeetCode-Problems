// 2869. Minimum Operations to collect elements
// Tested successfully

let nums1 = [3,1,5,4,2], k1 = 2;
let nums2 = [3,1,5,4,2], k2 = 5;
let nums3 = [3,2,5,3,1], k3 = 3


function minOpsToCollectElements(nums, k)
{
    let length = nums.length;
    let dict ={};

    for (let i = length-1; i > -1; i--)
    {
        if(nums[i] <= k && dict[i] == null) {
            dict[i] = "";
            let cnt = 0;
            for (key of Object.keys(dict))
            {
                cnt++;
            }
            if (cnt == k) return length - i;
        } 
    }
}

console.log(minOpsToCollectElements(nums1, k1));
console.log(minOpsToCollectElements(nums2, k2));
console.log(minOpsToCollectElements(nums3, k3));

