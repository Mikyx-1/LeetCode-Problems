// 1356. Sort Integers by the number of 1 Bits
// Tested successfully

let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let arr2 = [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1];


function countBit1(num)
{
    let cnt = 0;
    while(num>0)
    {
        if(num%2==1) cnt++;
        num = Math.floor(num/2);
    }
    return cnt;
}

function sortIntegersBy1Bits(arr){
    arr.sort((a, b) => a-b);
    let temp_arr = [];
    for (let i = 0; i < arr.length; i++)
    {
        temp_arr.push([countBit1(arr[i]), arr[i]]);
    }

    temp_arr.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < temp_arr.length; i++)
    {
        temp_arr[i] = temp_arr[i][1];
    }
    return temp_arr;
}

console.log(sortIntegersBy1Bits(arr1));
console.log(sortIntegersBy1Bits(arr2));
