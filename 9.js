// 9: Palindrome Number
// Tested successfully
// Did not convert to string!

let x1= 121, x2 = -121, x3 = 10, x4=1234, x5=1221;




function checkPalindrom(x)
{
    function reverseInteger(num, result)
    {
        if(Math.floor(num/10) == 0) return result + num%10;
    
        let numDigits_minus1 = Math.floor(Math.log10(num));
    
        return reverseInteger(Math.floor(num/10), result + Math.floor(num%10)*Math.pow(10, numDigits_minus1))
    }


    if(x < 0) return false;
    if(x != reverseInteger(x, 0)) return false;

    return true;

}

console.log(checkPalindrom(x1));
console.log(checkPalindrom(x2));
console.log(checkPalindrom(x3));
console.log(checkPalindrom(x4));
console.log(checkPalindrom(x5));