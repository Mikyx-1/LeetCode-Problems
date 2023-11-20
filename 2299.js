// 2299. Strong Password Checker II
// Tested successfully

let password1 = "IloveLe3tcode!";
let password2 = "Me+You--IsMyDream";
let password3 = "1aB!";

function strongPasswordCheckerII(password)
{
    let length = password.length;
    if(length < 8) return false;

    let oneLowercase = false;
    let oneUppercase = false;
    let oneDigit = false;
    let oneSpecialChar = false;
    let specialChar = "!@#$%^&*()-+";


    for (let i = 0; i < length; i++)
    {
        code = password[i].charCodeAt(0);
        if(code > 96 && code < 123) oneLowercase = true;
        else if (code > 64 && code < 91) oneUppercase = true;
        else if(code > 47 && code <58) oneDigit = true;
        else if (specialChar.indexOf(password[i]) != -1) oneSpecialChar = true;
        
        if(i < length-1)
        {
            if (password[i] == password[i+1]) return false;
        }
    }
    return oneLowercase&&oneUppercase&&oneDigit&&oneSpecialChar;
}

console.log(strongPasswordCheckerII(password1));
console.log(strongPasswordCheckerII(password2));
console.log(strongPasswordCheckerII(password3));