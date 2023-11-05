// 1342. Number of Steps to reduce a number to 0
// Tested successfully

let num1 = 14; num2 = 8;

function numOfSteps(num)
{
    let cnt = 0;
    while(num!=0)
    {
        if(num%2==0) num = Math.floor(num/2);

        else num--;

        cnt++;
    }
    return cnt;
}

console.log(numOfSteps(num1));
console.log(numOfSteps(num2));