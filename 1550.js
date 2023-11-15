// 1550. Three Consecutive Odds
// Tested successfully

let arr1 = [2, 6, 4, 1], arr2 = [1, 2, 34, 3, 4, 5, 7, 23, 12];

function checkThreeConsecutiveOdds(arr)
{
    for (let i = 0 ; i < arr.length - 3; i++)
    {
        if(arr[i] %2 == 1 && arr[i+1] %2 == 1 && arr[i+2]%2==1) return true;
    }

    return false;
}


console.log(checkThreeConsecutiveOdds(arr1));
console.log(checkThreeConsecutiveOdds(arr2));