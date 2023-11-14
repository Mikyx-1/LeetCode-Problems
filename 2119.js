// 2119. A Number After a Double Reversal
// Tested successfully

let num1 = 526, num2 = 1800, num3 = 0;

function aNumberAfterADoubleReversal(num)
{
    if(num==0) return true;

    let numLength = Math.ceil(Math.log10(num)) + 1;
    if(numLength==1) return true;

    if(num%10==0) return false;
    return true;
}


console.log(aNumberAfterADoubleReversal(num1));
console.log(aNumberAfterADoubleReversal(num2));
console.log(aNumberAfterADoubleReversal(num3));
console.log(aNumberAfterADoubleReversal(19870));