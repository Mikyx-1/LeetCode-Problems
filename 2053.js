// 2053. Kth Distinct String in an array
// Tested successfully

let arr1 = ["d","b","c","b","c","a"], k1 = 2;
let arr2 = ["aaa","aa","a"], k2 = 1;
let arr3 = ["a","b","a"], k3 = 3;


function kthDistinctStringInAnArray(arr, k)
{
    let dict = {};
    for (a of arr)
    {
        if(dict[a] == null) dict[a] = 1;
        else dict[a]++;
    }

    let idx = 0;
    for (let key of Object.keys(dict))
    {
        if(dict[key] == 1) idx++;
        if(idx == k) return key;
    }
    return ""
}

console.log(kthDistinctStringInAnArray(arr1, k1));
console.log(kthDistinctStringInAnArray(arr2, k2));
console.log(kthDistinctStringInAnArray(arr3, k3));