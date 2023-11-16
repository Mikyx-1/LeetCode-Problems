// 1758. Minimum changes to make alternating binary string
// Tested successfully

// O(n)

let s1 = "0100", s2 = "10", s3 = "1111";

function minimumChangesToMakeAlternatingBinaryString(string)
{
    let cnt = 0;
    let latest = string[0];

    for (let i = 1; i < string.length; i++)
    {
        if(string[i] == latest)
        {
            latest = (1 - parseInt(latest)).toString();
            cnt++;
        }
        else{
            latest = string[i];
        }
    }
    return cnt;
}

console.log(minimumChangesToMakeAlternatingBinaryString(s1));
console.log(minimumChangesToMakeAlternatingBinaryString(s2));
console.log(minimumChangesToMakeAlternatingBinaryString(s3));
