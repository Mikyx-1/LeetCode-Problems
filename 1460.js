// 1460. Make 2 Arrays Equal by Reversing Subarrays
// Tested successfully

let target1 = [1, 2, 3, 4], arr1 = [2, 4, 1, 3];
let target2 = [7], arr2 = [7];
let target3 = [3, 7, 9], arr3 = [3, 7, 11];

function createDict(arr)
{   
    let dict = {};
    for(item of arr)
    {
        if(dict[item] == null || dict[item] == undefined) dict[item]=1;
        else dict[item]++;
    }
    return dict;
}

function make2ArraysEqual(target, arr)
{
    let dict1 = createDict(target);
    let dict2 = createDict(arr);
    for (key of Object.keys(dict1))
    {
        if(dict2[key] == undefined || dict2[key] == null) return false;

        if(dict2[key] != dict1[key]) return false;
    }

    return true;
}

console.log(make2ArraysEqual(target1, arr1));
console.log(make2ArraysEqual(target2, arr2));
console.log(make2ArraysEqual(target3, arr3));