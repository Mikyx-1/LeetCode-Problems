// 2605: Form Smallest Number From Two Digit Arrays
// Tested successfully

// O(n)


let ex1 = {'nums1': [4, 1, 3], 'nums2': [5, 7]};
let ex2 = {'nums1': [3, 5, 2, 6], 'nums2': [3, 1, 7]};


function formSmallestNumberFrom2DigitArrays(nums1, nums2)
{
    let min1 = nums1[0];
    let min2 = nums2[0];
    let length1 = nums1.length;
    let length2 = nums2.length;
    let idx1 = 0; 
    let idx2 = 0;

    let dict1 = {};
    let dict2 = {};
    while(true)
    {
        if(idx2<length2)
        {
            if(nums2[idx2] < min2) min2 = nums2[idx2];
            if(dict2[nums2[idx2]] == null) dict2[nums2[idx2]] = "";
            idx2++;
        }

        if(idx1<length1)
        {
            if(nums1[idx1] < min1) min1 = nums1[idx1];
            if(dict1[nums1[idx1]] == null) dict1[nums1[idx1]] = "";
            idx1++;
        }
        if(idx1 >= length1 && idx2 >= length2) break;
    }

    let min = Infinity;
    for (key of Object.keys(dict1))
    {
        if(dict2[key] != null && parseInt(key) < min) min = parseInt(key);
    }

    let rivalMin = null;
    if(min1 > min2) rivalMin =  min2*10 + min1;
    else rivalMin = min1*10+min2;
    if(min < rivalMin) return min;
    return rivalMin;
    
}

console.log(formSmallestNumberFrom2DigitArrays(ex1['nums1'], ex1['nums2']));
console.log(formSmallestNumberFrom2DigitArrays(ex2['nums1'], ex2['nums2']));