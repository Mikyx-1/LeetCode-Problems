// 2566. Maximum Difference by Remapping a Digit
// Tested successfully


let num1 = 11891, num2 = 90;

function maximumDiffByRemappingADigit(num)
{
    let list = num.toString().split("");
    
    let firstDigitMin = null;
    let firstDigitMax = null;

    for (l of list)
    {
        if (l!="9" && firstDigitMax == null) firstDigitMax = l;
        
        if(l!= "0" && firstDigitMin == null) firstDigitMin = l;
        
        if(firstDigitMax != null && firstDigitMin != null) break;
    }

    let max = "";
    let min = "";
    for (l of list)
    {
        if(l == firstDigitMax) max += "9";
        else max += l;

        if(l == firstDigitMin) min += "0";
        else min += l;
    }

    return parseInt(max) - parseInt(min);
}

console.log(maximumDiffByRemappingADigit(num1));
console.log(maximumDiffByRemappingADigit(num2));
console.log(maximumDiffByRemappingADigit("9987"));