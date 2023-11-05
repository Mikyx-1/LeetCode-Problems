// 1346. Check if N and Its Double Exist
// Tested successfully

let arr1 = [10, 2, 5, 3];
let arr2 = [3, 1, 7, 11];

function check(arr){
    let visitedSet = new Set()
    for (let i = 0; i < arr.length; i++)
    {
        double = arr[i]*2;
        half = arr[i]/2;
        if (visitedSet.has(double) || visitedSet.has(half)) return true;
        visitedSet.add(arr[i])
    }
    return false;
}

console.log(check(arr1));
console.log(check(arr2));