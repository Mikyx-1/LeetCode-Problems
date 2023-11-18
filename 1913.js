// 1913. Maximum Product Difference Between 2 Pairs
// Tested successfully

// O(n^2)

let nums1 = [5, 6, 2, 7, 4], nums2 = [4,2,5,9,7,4,8];


function maximumProductDifferenceBetween2Pairs(nums)
{
    let length = nums.length;
    let maxProd = -Infinity;
    let minProd = Infinity;
    for(let i = 0; i < length-1; i++)
    {
        for (let j = i+1; j < length; j++)
        {
            let prod = nums[i]*nums[j];
            if (prod > maxProd) maxProd = prod;

            if (prod < minProd) minProd = prod;
        }
    }
    return maxProd - minProd;
}

console.log(maximumProductDifferenceBetween2Pairs(nums1));
console.log(maximumProductDifferenceBetween2Pairs(nums2));