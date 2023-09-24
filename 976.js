// 976: Largest Perimeter Triangle
// Tested successfully


let nums1 = [2, 1, 2];
let nums2 = [1, 2, 1, 10];

function checkTriangle(a, b, c)
{
    if(a + b > c && b + c  > a && a + c > b) return true;

    return false;
}


function largestPerimeterTriangle(nums)
{

    if (nums.length < 3) return 0;

    let maxPerimeter = 0;

    for (let i = 0; i<nums.length-2; i++)
    {
        for(let j = i+1; j < nums.length-1; j++)
        {
            for(let k = j+1; k<nums.length; k++)
            {
                if(checkTriangle(nums[i], nums[j], nums[k]) && nums[i] + nums[j] + nums[k] > maxPerimeter) 
                {
                    maxPerimeter = nums[j] + nums[j] + nums[k];
                }
            }
        }
    }

    return maxPerimeter;
}

console.log(largestPerimeterTriangle(nums1));
console.log(largestPerimeterTriangle(nums2));

