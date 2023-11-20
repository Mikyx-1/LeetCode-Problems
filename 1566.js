// 1566. Detect Pattern of Length M Repeated K or More Times
// Tested successfully

let arr1 = [1,2,4,4,4,4], m1 = 1, k1 = 3;
let arr2 = [1,2,1,2,1,1,1,3], m2 = 2, k2 = 2;
let arr3 = [1,2,1,2,1,3], m3 = 2, k3 = 3;


function checkEqualArr(arr1, arr2)
{
    let length1 = arr1.length;
    let length2 = arr2.length;
    for (let i = 0; i < length1; i++)
    {
        if(arr1[i] != arr2[i]) return false;
    }
    return true;
}

function detectPatternOfLengthM(arr, m, k)
{
    let cnt = 0;
    let pattern = arr.slice(0, m);
    let idx = 0;
    let length = arr.length;
    while(idx < length)
    {
        if(checkEqualArr(pattern, arr.slice(idx, idx+m)) == true)
        {
            cnt++;
            idx+=m;
            if(cnt>=k) return true;
        }
        else{
            idx++;
            pattern = arr.slice(idx, idx+m);
            cnt = 0;
        }
    }
    return false;
}

console.log(detectPatternOfLengthM(arr1, m1, k1));
console.log(detectPatternOfLengthM(arr2, m2, k2));
console.log(detectPatternOfLengthM(arr3, m3, k3));
