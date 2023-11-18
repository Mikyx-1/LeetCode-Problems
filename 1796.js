// 1796. Second Largest Digit in a string
// Tested successfully

let s1 = "dfa12321afd", s2 = "abc1111";

function largestDigitInAString(string)
{
    let maxDigit = -1;
    let secondMaxDigit = -2;
    for (s of string)
    {
        code = s.charCodeAt(0)
        if(code < 58)
        {
            if (code > maxDigit)
            {
                secondMaxDigit = maxDigit;
                maxDigit = code;
            }
            else if (code == maxDigit) secondMaxDigit = code;
            else if (code > secondMaxDigit && code < maxDigit) secondMaxDigit = code;
        }
    }

    if(maxDigit == secondMaxDigit) return -1;
    return secondMaxDigit - 48;
}

console.log(largestDigitInAString(s1));
console.log(largestDigitInAString(s2));
