// 1431. Kids with the greatest number of candies
// Algorithm: 
// Step 1: Find max and position
// Step 2: Iterate through the list
// Tested successfully

let candies1 = [2, 3, 5, 1, 3];
let extraCandies1 = 3;

let candies2 = [4, 2, 1, 1, 2];
let extraCandies2 = 1;

function findMax(arr)
{
    let max_value = arr[0];
    let max_pos = 0;
    for (let i = 1; i<arr.length; i++)
    {
        if(arr[i] > max_value)
        {
            max_value = arr[i];
            max_pos = i;
        }
    }

    return [max_pos, max_value];
}

function returnResult(candies, extraCandies)
{
    let res = Array(candies.length).fill(false)
    let [max_idx, max_candies] = findMax(candies);
    res[max_idx] = true;
    for (let i = 0; i < candies.length; i++)
    {
        if(i!=max_idx)
        {
            if(candies[i] + extraCandies >= max_candies) res[i] = true;
        }


    }
    return res;
}

console.log(returnResult(candies1, extraCandies1));
console.log(returnResult(candies2, extraCandies2));