// 1588. Sum of All Odd Length Subarrays
// Tested successfully

let arr1 = [1, 4, 2, 5, 3], arr2 = [1, 2], arr3 = [10, 11, 12];


function calculateWindowSum(arr)
{
    let sum = 0;
    let length = arr.length;
    for (let i = 0; i < length; i++)
    {
        sum+= arr[i];
    }

    return sum;
}

function sumOfAllOddLengthSubarrays(arr)
{
    let sum = 0;
    let length = arr.length;
    let windowSize = 1;

    while(windowSize <= length)
    {
        if(windowSize==1)
        {
            for(let i = 0; i < length; i++) sum+= arr[i];
        }

        else{
            let currSum = calculateWindowSum(arr.slice(0, windowSize));
            let prevSum = currSum;
            for (let i = windowSize; i < length; i++)
            {
                currSum = currSum + prevSum + arr[i] - arr[i-windowSize];
                prevSum = prevSum + arr[i] - arr[i-windowSize];
            }
            sum += currSum;
        }
        
        windowSize += 2;
    }
    return sum;
}

console.log(sumOfAllOddLengthSubarrays(arr1));
console.log(sumOfAllOddLengthSubarrays(arr2));
console.log(sumOfAllOddLengthSubarrays(arr3));