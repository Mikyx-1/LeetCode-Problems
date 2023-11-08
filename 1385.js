// 1385. find Distance Value Between 2 Arrays
// Tested successfully

let arr1 = [4, 5, 8], arr2 = [10, 9, 1, 8];


function findTheDistanceValueBetween2Arrays(arr1, arr2, d)
{
    let cnt = 0;
    let arr1Length = arr1.length, arr2Length = arr2.length;
    for(i = 0; i < arr1Length; i++)
    {   
        let breakFlag = false;
        for (j = 0; j < arr2Length; j++)
        {
            if(Math.abs(arr1[i] - arr2[j]) <= d) breakFlag = true;
        }

        if (breakFlag == false) cnt++;
    }

    return cnt;
}

console.log(findTheDistanceValueBetween2Arrays(arr1, arr2, 2));
console.log(findTheDistanceValueBetween2Arrays([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3));