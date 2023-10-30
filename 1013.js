// 1013. Parition Array into 3 parts with equal sum
// Tested successfully

let arr1 = [0,2,1,-6,6,-7,9,1,2,0,1];
let arr2 = [0,2,1,-6,6,7,9,-1,2,0,1];
let arr3 = [3,3,6,5,-2,2,5,1,-9,4];



function partitionArrayInto3PartsWithEqualSum(arr)
{
    let cnt = 0;
    let tempArr = [];
    let target = arr.reduce((a, b) => {return a + b})/3;
    for (let i = 0; i < arr.length; i++)
    {
        tempArr.push(arr[i]);
        if(tempArr.reduce((a, b) => {return a + b}) == target)
        {
            cnt++;
            tempArr = [];
        }
    }
    if (cnt == 3) return true
    return false
}







console.log(partitionArrayInto3PartsWithEqualSum(arr1));
console.log(partitionArrayInto3PartsWithEqualSum(arr2));
console.log(partitionArrayInto3PartsWithEqualSum(arr3));