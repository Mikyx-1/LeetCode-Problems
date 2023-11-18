// 2169. Count Operations to Obtain Zero
// Tested successfully

let num1 = 2, num2 = 3;



function countOperationsToObtainZero(num1, num2)
{
    let numOps = 0;
    while(num1 != 0 && num2 != 0)
    {
        if(num1 >= num2) num1 = num1 - num2;
        else num2 = num2 - num1;

        numOps++;
    }
    return numOps;
}

console.log(countOperationsToObtainZero(num1, num2));
console.log(countOperationsToObtainZero(10, 10));