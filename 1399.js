// 1399. Count Largest Group
// Tested successfully


let n1 = 13; n2 = 2;

function sumDigits(n, ans=0)
{
    if(Math.floor(n/10) == 0) return ans + n%10;

    return sumDigits(Math.floor(n/10), ans+n%10);
}

function countLargestGroup(n)
{
    let dict = {};
    let maxSumDigitsValue = 0;
    for (let i = 1; i < n+1; i++)
    {
        let sumDigitsValue = sumDigits(i);
        if(dict[sumDigitsValue] == undefined || dict[sumDigitsValue] == null) dict[sumDigitsValue] = 1;
        else dict[sumDigitsValue]++;

        if (dict[sumDigitsValue] > maxSumDigitsValue) maxSumDigitsValue = dict[sumDigitsValue] 
    }
    let cnt = 0;

    for (key of Object.keys(dict)){
        if (dict[key] == maxSumDigitsValue) cnt++;
    }
    return cnt;
}


console.log(countLargestGroup(10000));
