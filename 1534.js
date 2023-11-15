// 1534. Count Good Triplets
// Tested successfully

// O(n^3)

let arr1 = [3, 0, 1, 1, 9, 7], a1 = 7, b1 = 2, c1 = 3;
let arr2 = [1, 1, 2, 2, 3], a2 = 0, b2 = 0, c2 = 1;

function countGoodTriplets(arr, a, b, c)
{
    let cnt = 0;
    let length = arr.length;
    for (let i = 0; i < length-2; i++)
    {
        for(let j = i+1; j < length-1; j++)
        {   
            
            for(let k = j+1; k < length; k++)
            {
                if(Math.abs(arr[i] - arr[j]) <= a && Math.abs(arr[j] - arr[k]) <= b 
                   && Math.abs(arr[i] = arr[k] <= c)) cnt++;
            }
        }
    }

    return cnt;
}

console.log(countGoodTriplets(arr1, a1, b1, c1));
console.log(countGoodTriplets(arr2, a2, b2, c2));