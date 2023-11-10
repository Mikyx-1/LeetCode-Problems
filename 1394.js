// 1394. Find Lucky Integer in an array
// Tested successfully

let arr1 = [2, 2, 3, 4], arr2 = [1, 2, 2, 3, 3, 3], arr3 = [2, 2, 2, 3, 3];


function largestLuckyInteger(arr)
{
    let dict = {};
    for (let item of arr)
    {
        if(dict[item] == null || dict[item] == undefined) dict[item] = 1;
        else dict[item]++;
    }

    let maxLuckyNumber = -1;
    for (let key of Object.keys(dict))
    {
        if(dict[key] == key && key > maxLuckyNumber) maxLuckyNumber = key;
    }

    return maxLuckyNumber;
}


console.log(largestLuckyInteger(arr1));
console.log(largestLuckyInteger(arr2));
console.log(largestLuckyInteger(arr3));