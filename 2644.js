// 2644: Find the maximum divisibility Score
// Tested successfully


let nums1 = [4,7,9,3,9];
let divisors1 = [5,2,3];

let nums2 = [20,14,21,10];
let divisors2 = [5,7,5];

let nums3 = [12];
let divisors3 = [10, 16];

function findMaximumDivisibilityScore(nums, divisors)
{
    let uniqueDivisors = new Set(divisors);
    let maximumDivisor = uniqueDivisors[0];
    let maximumDivisorCnt = -1;


    for (uniqueDivisor of uniqueDivisors)
    {
        let numDivisible = 0;
        for (num of nums)
        {
            if(num%uniqueDivisor==0)
            {
                numDivisible++;
            }
        }
        if(numDivisible > maximumDivisorCnt)
        {
            maximumDivisorCnt = numDivisible;
            maximumDivisor = uniqueDivisor;
        }
    }

    return maximumDivisor;
}

console.log(findMaximumDivisibilityScore(nums1, divisors1));
console.log(findMaximumDivisibilityScore(nums2, divisors2));
console.log(findMaximumDivisibilityScore(nums3, divisors3));