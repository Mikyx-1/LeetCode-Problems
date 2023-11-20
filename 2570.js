// 2570. Merge 2 2D Arrays by Summing Values
// Tested successfully

// Algo:

// let nums1 = [[1,2],[2,3],[4,5]], nums2 = [[1,4],[3,2],[4,1]];

let nums1 = [[2,4],[3,6],[5,5]], nums2 = [[1,3],[4,3]];

function merge2DArraysBySummingValues(nums1, nums2) {
    let length1 = nums1.length;
    let length2 = nums2.length;
    let idx1 = 0;
    let idx2 = 0;

    while (idx1 < length1 && idx2 < length2) {
        if(nums1[idx1][0] == nums2[idx2][0])
        {
            nums1[idx1][1] += nums2[idx2][1];
            idx1++;
            idx2++
        }
        else if (nums1[idx1][0] > nums2[idx2][0])
        {
            nums1.splice(idx1, 0, nums2[idx2]);
            idx1++;
            idx2++;
            length1++;
        }

        else {
            idx1++;
        }
    }

    // Append remaining elements of nums1 to the end
    while (idx2 < length2) {
        nums1.push(nums2[idx2]);
        idx2++;
    }

    return nums1;
}

console.log(merge2DArraysBySummingValues(nums1, nums2));