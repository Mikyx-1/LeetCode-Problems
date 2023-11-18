// 1869. Longer Contiguous Segments of Ones Than Zeros
// Tested successfully

let s1 = "1101", s2 = "111000", s3 = "110100010";


function checkLonger1s(string)
{
    let idx = 0;

    let max1Length = 0;
    let max0Length = 0;
    let length = string.length;

    let curr1Length = 0;
    let curr0Length = 0;
    while(idx < length)
    {
        if(string[idx] == "1"){
            curr1Length++;
            curr0Length = 0;
            if(curr1Length > max1Length) max1Length = curr1Length;
        }

        else if (string[idx] == "0")
        {
            curr1Length = 0;
            curr0Length++;
            if(curr0Length > max0Length) max0Length = curr0Length;
        }

        idx++;
    }

    if (max1Length > max0Length) return true;
    return false;
}

console.log(checkLonger1s(s1));
console.log(checkLonger1s(s2));
console.log(checkLonger1s(s3));
