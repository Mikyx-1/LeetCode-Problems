// 2928. Distribute candies among children I
// Tested successfully

// O(n^2)

let n1 = 5, limit1 = 2;
let n2 = 3, limit2 = 3;

function distributeCandies(n, limit)
{

    let cnt = 0;
    for (let i = 0; i < limit+1; i++)
    {
        for (let j = 0; j < limit+1; j++)
        {
            if (n - i - j >= 0 && n - i - j <= limit) cnt++;
        }
    }
    return cnt;
}

console.log(distributeCandies(n1, limit1));
console.log(distributeCandies(n2, limit2));
