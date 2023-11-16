// 1502. Can make Arithmetic Progression from sequence
// Tested successfully

// O(nlogn)


let arr1 = [3, 5, 1], arr2 = [1, 2, 4];

function canMakeArithmeticProgression(arr)
{
    let sortedArr = arr.sort((a, b) => (a-b));
    let prevDiff = Math.abs(arr[0] - arr[1]);
    for (let i = 1; i < arr.length-1; i ++)
    {
        currDiff = Math.abs(arr[i] - arr[i+1])
        if(prevDiff != currDiff) return false;
        prevDiff = currDiff;
    }
    return true;
}

console.log(canMakeArithmeticProgression(arr1));
console.log(canMakeArithmeticProgression(arr2));