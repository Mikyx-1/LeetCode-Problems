// 1619. Mean of Array After removing some elements
// Tested successfully

let arr1 = [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3];
let arr2 = [6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0];
let arr3 = [6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4];

function meanOfArrayAfterRemovingSomeElements(arr)
{
    arr.sort((a, b) => (a-b));
    let length = arr.length;
    let boundary = Math.floor(0.05*length);
    let sum = 0;
    for (let i = boundary; i < length-boundary; i++)
    {
        sum = sum + arr[i];
    }
    return sum/(length - boundary*2);
}

console.log(meanOfArrayAfterRemovingSomeElements(arr1));
console.log(meanOfArrayAfterRemovingSomeElements(arr2));
console.log(meanOfArrayAfterRemovingSomeElements(arr3));