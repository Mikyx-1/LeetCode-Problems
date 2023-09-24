// 941: Valid Mountain Array
// Tested successfully 


let arr1 = [2, 1];
let arr2 = [3, 5, 5];
let arr3 = [0, 3, 2, 1];
let arr4 = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8];

function validMountainArr(arr)
{
    if(arr.length < 1) return false;
    if(arr.length > 1 && arr[1] < arr[0]) return false;


    let upward=true, downward=false;

    for(let i = 0; i < arr.length-1; i++)
    {
      
        if(arr[i+1] - arr[i] < 0)
        {
            downward = true;
        }

        if(downward==true && arr[i+1] > arr[i]) return false;
    }

    if(downward==false) return false;
    return true;
}

console.log(validMountainArr(arr1));
console.log(validMountainArr(arr2));
console.log(validMountainArr(arr3));
console.log(validMountainArr(arr4));
console.log(validMountainArr(arr5));