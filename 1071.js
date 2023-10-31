// 1071. Greatest Common Divisor of Strings
// Tested successfully

let str1 = "ABCABC", str2 = "ABC";
// let str1 = "ABABAB", str2 = "ABAB";
// let str1 = "LEET", str2 = "CODE"



function repeatString(string, k)
{
    let origString = string;
    for (let i = 0; i < k-1; i++)
    {
        string = string + origString;
    }
    return string
}
function greatestCommonDivisorOfStrings(str1, str2)
{
    let str1_length = str1.length;
    let str2_length = str2.length;

    if(str1_length==0 || str2_length==0) return ""
    
    if (str1_length>str2_length)
    {
        let modulo = str1_length%str2_length;
        if (modulo==0)
        {
            if(repeatString(str2, Math.floor(str1_length/str2_length)) == str1) return str2;
        }
        return greatestCommonDivisorOfStrings(str1, str2.slice(0, -1));
    }
    else if (str1_length <= str2_length)
    {
        let modulo = str2_length%str1_length;
        if(modulo==0)
        {
            if(repeatString(str1, Math.floor(str2_length/str1_length)) == str2) return str1;
        }

        return greatestCommonDivisorOfStrings(str1.slice(0, -1), str2);
    }
}
console.log(greatestCommonDivisorOfStrings(str1, str2));
console.log(greatestCommonDivisorOfStrings("ABABAB", "ABAB"));
console.log(greatestCommonDivisorOfStrings("LEET", "CODE"));

