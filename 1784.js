// 1784. Check If a binary String has at most one segment of Ones
// Tested successfully

// O(n)

let s1 = "1001", s2 = "110";

function checkIfBinaryStringHas1Segment(string)
{

    let idx = 1;
    let numSegments = 0;
    let length = string.length;
    let cnt = 1;

    while(idx < length)
    {
        if(string[idx] == "1")
        {
            cnt++;
        }

        else if(string[idx] == "0")
        {
            if(cnt > 1) numSegments++;
            cnt = 0;
        }
        idx++;
    }
    if(cnt>1) numSegments++;
    if(numSegments == 1) return true;
    return false;
}

console.log(checkIfBinaryStringHas1Segment(s1));
console.log(checkIfBinaryStringHas1Segment(s2));
console.log(checkIfBinaryStringHas1Segment("11111111000011"));