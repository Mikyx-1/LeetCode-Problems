// 2283. Check If Number has Equal Digit count and Digit Value
// Tested successfully

let num1 = "1210", num2 = "030";


function checkIfNumberHasEqualDigitCount(num)
{
    let dict = {};
    for (let i = 0; i < num.length; i++)
    {
        if(dict[i] == null) dict[i] = 0;
        
        if(dict[num[i]]==null) dict[num[i]] = 1;
        else dict[num[i]]++;
    }

    for (let i = 0; i < num.length; i++)
    {
        if(dict[i] != num[i]) return false;
    }
    return true;
}

function iterate(n)
{
    for(let i =1; i < n; i++)
    {
        if(checkIfNumberHasEqualDigitCount(i.toString())) console.log(i);
    }
}

console.log(checkIfNumberHasEqualDigitCount(num1));
console.log(checkIfNumberHasEqualDigitCount(num2));
