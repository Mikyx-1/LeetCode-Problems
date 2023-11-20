// 2418. Sort the people
// Tested successfully

// O(nlogn)

let names1 = ["Mary","John","Emma"], heights1 = [180,165,170];
let names2 = ["Alice","Bob","Bob"], heights2 = [155,185,150];

function sortThePeople(names, heights)
{
    let dict = {};
    let length = heights.length;
    for (let i = 0; i < length; i++)
    {
        if(dict[heights[i]] == null) dict[heights[i]] = [names[i]];
        else dict[heights[i]].push(names[i]);
    }

    let ans = [];
    heights.sort((a, b) => (b-a));
    for (let i = 0; i < length; i++)
    {
        ans.push(...dict[heights[i]]);
    }
    return ans;
}

console.log(sortThePeople(names1, heights1));
console.log(sortThePeople(names2, heights2));