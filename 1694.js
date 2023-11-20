// 1694. Reformat Phone number
// Tested successfully

let number1 = "1-23-45 6", number2 = "123 4-567", number3 = "123 4-5678";

function extractNumber(number)
{
    let length = 0;
    let ans = "";
    for (n of number)
    {
        code = n.charCodeAt(0);
        if(code > 47 && code < 58){
            length++;
            ans += n;
        }
    }
    return [ans, length];
}


function reformatPhoneNumber(number)
{
    let [extractedNumber, length] = extractNumber(number);
    if(length < 4) return extractedNumber;
    else if (length==4) return extractNumber.slice(0, 2) + "-" + extractedNumber.slice(2, );

    let ans = extractedNumber.slice(0, 3);
    let idx = 3;
    while(idx + 4 < length)
    {
        ans = ans + "-" +  extractedNumber.slice(idx, idx+3);
        idx += 3;
    }

    if (length - idx == 4) return ans + "-" + extractedNumber.slice(idx, idx+2) + "-" + extractedNumber.slice(idx+2, )
    return ans + "-" +  extractedNumber.slice(idx, )
}

console.log(reformatPhoneNumber(number1));
console.log(reformatPhoneNumber(number2));
console.log(reformatPhoneNumber(number3));