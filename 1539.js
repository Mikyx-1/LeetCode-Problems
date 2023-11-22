// 1539. Kth Missing Positive Number
// Tested successfully

let arr1 = [2,3,4,7,11], k1 = 5;
let arr2 = [1,2,3,4], k2 = 2;

function kthMissingPositiveNumber(arr, k)
{
    let dict = {};
    for (a of arr) {
        dict[a] = 1;
    }

    let num = 0;
    let cnt = 0;
    while(cnt != k)
    {
        num++;
        if(dict[num] == null) cnt++;
    }
    return num;
}

console.log(kthMissingPositiveNumber(arr1, k1));
console.log(kthMissingPositiveNumber(arr2, k2));