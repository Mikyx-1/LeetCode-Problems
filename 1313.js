// 1313. Decompress Run-Length Encoded List
// Tested successfully

let nums1 = [1, 2, 3, 4];
let nums2 = [1, 1, 2, 3];

function decompressRunLengthEncodedList(nums)
{
    let result = [];
    for (let i = 0; i < nums.length; i+=2)
    {
        for (let j = 0; j < nums[i]; j++) result.push(nums[i+1]);
    }
    return result;
}

console.log(decompressRunLengthEncodedList(nums1));
console.log(decompressRunLengthEncodedList(nums2));
