// 1523. Count Odd Numbers in an Interval Range
// Tested successfully

function countOddNumbersInAnIntervalRange(low, high)
{
    let cnt = 0;
    for (let i = low; i <= high; i++)
    {
        if(i%2==1) cnt++;
    }
    return cnt;
}

console.log(countOddNumbersInAnIntervalRange(3, 7));
console.log(countOddNumbersInAnIntervalRange(8, 10));