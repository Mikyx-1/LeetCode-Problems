// 2848. Points that intersect with cars
// Tested successfully

let nums1 = [[3, 6], [1, 5], [4, 7]];
let nums2 = [[1, 3], [5, 8]];

function pointsThatIntersectWithCars(nums)
{
    let dict = {};
    for (num of nums)
    {
        for (let i = num[0]; i <= num[1]; i++)
        {
            dict[i] = 1;
        }
    }

    let cnt = 0;
    for (key of Object.keys(dict))
    {
        cnt++;
    }
    return cnt;
}

console.log(pointsThatIntersectWithCars(nums1));
console.log(pointsThatIntersectWithCars(nums2));