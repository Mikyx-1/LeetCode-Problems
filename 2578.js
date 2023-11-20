// 2578. Split with minimum sum
// Tested successfully

let num1 = 4325, num2 = 687;

function evalBase10(num)
{
    for (let i = 0; i < num.length; i++)
    {
        if(parseInt(num[i]) != 0) return parseInt(num.slice(i, ));
    }
    return num;
}


function splitWithMinimumSum(num)
{
    let list = num.toString().split("");
    list.sort((a, b) => (a-b));
    let num1 = "";
    let num2 = "";
    for (let i = 0; i < list.length; i++)
    {
        if(i%2==0) num1 = num1 + list[i];
        else num2 = num2 + list[i]; 
    }
    return parseInt(num1) + parseInt(num2);
}

console.log(splitWithMinimumSum(num1));
console.log(splitWithMinimumSum(num2));