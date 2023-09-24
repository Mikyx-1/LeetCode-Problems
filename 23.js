// 23: Merge k sorted lists
// Tested successfully

// Algorithm: 
// Step 1: create the hashMap



let lists1 = [[1, 4, 5], [1, 3, 4], [2, 6]];
let lists2 = [[]];
let lists3 = [];

function mergeKSortedLists(lists)
{
    let idxBuffer = [];
    let result = [];
    let total_length = 0;
    for (list of lists) 
    {
        total_length += list.length;
        idxBuffer.push(list.length-1);
    }

    for(let i = 0; i < total_length; i++)
    {   
        let greatestVal = lists[0][0];
        let greatestPos = 0;
        for (let j = 0; j < lists.length; j++)
        {
            if(lists[j][idxBuffer[j]] > greatestVal && idxBuffer[j] >= 0)
            {
                greatestVal = lists[j][idxBuffer[j]];
                greatestPos = j;
            }
        }
        result.unshift(greatestVal);
        idxBuffer[greatestPos]--;
    }
    return result;
}

console.log(mergeKSortedLists(lists1));
console.log(mergeKSortedLists(lists2));
console.log(mergeKSortedLists(lists3));