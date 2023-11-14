// 1464. Maximum Product of 2 elements in an array
// Tested successfully

let nums1 = [3, 4, 5, 2], nums2 = [1, 5, 4, 5], nums3 = [3, 7];

function maximumProductOf2ElementsInAnArray(nums)
{

    let positiv_max1 = nums[0];
    let positive_max2 = nums[1];

    let negative_max1 = nums[0];
    let negative_max2 = nums[1];
    for (num of nums.slice(1,))
    {
        if(num >= positiv_max1){
            positive_max2 = positiv_max1
            positiv_max1 = num;
        }
        else if(num >= positive_max2 && num <= positiv_max1) positive_max2 = num;


        if(num <= negative_max1) {
            negative_max2 = negative_max1;
            negative_max1 = num;
        }
        else if (num <= negative_max2 && num >= negative_max1) negative_max2 = num;
    }

    let negProd = (negative_max1-1)*(negative_max2-1);
    let posProd = (positiv_max1 - 1)*(positive_max2-1);
    if(negProd > posProd) return negProd;
    return posProd;
}

console.log(maximumProductOf2ElementsInAnArray(nums1));
console.log(maximumProductOf2ElementsInAnArray(nums2));
console.log(maximumProductOf2ElementsInAnArray(nums3));
console.log(maximumProductOf2ElementsInAnArray([-10, -3, -8, 7, 8]));