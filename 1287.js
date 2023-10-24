// 1287. Element Appearing More than 25% in sorted array
// Tested successfully

let arr1 = [1, 2, 2, 6, 6, 6, 6, 7, 10];
let arr2 = [1, 1];

function elementAppearingMoreThan25(arr)
{
    let length = arr.length;
    let windowSize = Math.ceil(length/4);

    for (let i = 0; i < length-windowSize; i++)
    {   let breakFlag = false;
        for (j = 0; j < windowSize-1; j++)
        {
            if (arr[i+j] != arr[i+j+1])
            {
                breakFlag = true;
                break;
            }
        }

        if (breakFlag==false) return arr[i];
    }
}

console.log(elementAppearingMoreThan25(arr1))
console.log(elementAppearingMoreThan25(arr2))