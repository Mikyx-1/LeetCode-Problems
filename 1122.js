// 1122. Relative Sort Array
// tested successfully

// let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
// let arr2 = [2, 1, 4, 3, 9, 6];

let arr1 = [28,6,22,8,44,17];
let arr2 = [22,28,8,6];

function relativeSortArr(arr1, arr2)
{
    let dict1 = {};
    let result = [];
    let residual = [];
    for (let i = 0; i < arr1.length; i++)
    {
        if(dict1[arr1[i]] == undefined || dict1[arr1[i]] == null){
            dict1[arr1[i]] = 1;
        }
        else dict1[arr1[i]]++;
    }

    for (let i = 0; i < arr2.length; i++)
    {
        for (let j = 0; j < dict1[arr2[i]]; j++)
        {
            result.push(arr2[i]);
        }   
        delete dict1[arr2[i]];
    }

    for (key of Object.keys(dict1)){
        for (let k = 0; k < dict1[key]; k++)
        {
            residual.push(parseInt(key));
        }
    }

    residual.sort((a, b) => a - b)
    
    return result.concat(residual);
}

console.log(relativeSortArr(arr1, arr2));