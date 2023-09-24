// 2605: Form Smallest Number From Two Digit Arrays
// Tested successfully


// Algorithm:
// Step 1: Sort array
// Step 2: check duplicates 
// Step 3: If no duplicates, concatenate the two first elements from the 2 arrays
// Step 4: Else, return that duplicate value

let ex1 = {'nums1': [4, 1, 3], 'nums2': [5, 7]};
let ex2 = {'nums1': [3, 5, 2, 6], 'nums2': [3, 1, 7]};


function formSmallestNumberFrom2DigitArrays(nums1, nums2)
{
    let sorted_nums1 = nums1.sort();
    let sorted_nums2 = nums2.sort();

    for (let i = 0; i < sorted_nums1.length; i++)
    {
        for (let j = 0; j < sorted_nums2.length; j++)
        {
            if(sorted_nums1[i] == sorted_nums2[j]) return sorted_nums1[i];
        }
    }

    return parseInt(sorted_nums1[0].toString() + sorted_nums2[0].toString())
}

console.log(formSmallestNumberFrom2DigitArrays(ex1['nums1'], ex1['nums2']));
console.log(formSmallestNumberFrom2DigitArrays(ex2['nums1'], ex2['nums2']));