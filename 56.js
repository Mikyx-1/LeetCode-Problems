// 56. Merge Intervals
// Step 1: Sort the intervals based on the 1st item
// Step 2: Create a new arr
// Step 3: If the first of an interval is less than the last of the previous interval --> Merge


// Tested successfully
// Used only for sorted intervals

let intervals1 = [[1, 3], [2, 6], [8, 10], [15, 18]];
let intervals2 = [[1, 4], [4, 5]]


const merge = (arr1, arr2) => {
    return arr1.slice(0, -1).concat(arr2.slice(1, ))
}


function mergeIntervals(intervals){
    let mergedIntervals = [];
    
    for (let i = 0; i < intervals.length - 1; i++)
    {
        if (intervals[i][1] >= intervals[i+1][0]){
            mergedIntervals.push([intervals[i][0], intervals[i+1][1]])
            i++;
        }    

        else{
            mergedIntervals.push(intervals[i]);
            mergedIntervals.push(intervals[i+1]);
        }
    }

    return mergedIntervals;
}

console.log(...mergeIntervals(intervals2))