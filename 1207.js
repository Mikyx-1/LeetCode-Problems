// 1207. Unique Number of Occurrences
// Tested successfully

let arr1 = [1, 2, 2, 1, 1, 3];
let arr2 = [1, 2];
let arr3 = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0];

function checkUniqueOccurrences(arr)
{
    let dict = {};
    for (let i = 0; i < arr.length; i++)
    {
        if(!(arr[i] in dict)) dict[arr[i]] = 1;
        else dict[arr[i]]++;
    }

    let values = Object.values(dict);
    for (let i = 0; i < values.length; i++)
    {
        for (let j = i+1; j < values.length; j++)
        {
            if (values[i] == values[j]) return false;
        }
    }
    return true;
}

console.log(checkUniqueOccurrences(arr1));
console.log(checkUniqueOccurrences(arr2));
console.log(checkUniqueOccurrences(arr3));