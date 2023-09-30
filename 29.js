// 29. Divide two integers
// Tested Successfully


let dividend1 = 10, divisor1 = 3;
let dividend2 = 7, divisor2 = -3;
let dividend3 = 47, divisor3 = -2;


function changeSign(n)
{
    return -n;
}

function divide2Integers(dividend, divisor)
{   

    if(divisor == 0 || dividend < divisor) return 0;

    let result = 0;
    if((divisor > 0 && dividend > 0) || (divisor < 0 && dividend < 0))
    {

        while(dividend - divisor >= 0)
        {
            dividend = dividend - divisor;
            result++;
        }
    }

    else{
        divisor = Math.abs(divisor);
        dividend = Math.abs(dividend);
        result = -divide2Integers(dividend, divisor);
    }

    return result;
}

console.log(divide2Integers(dividend1, divisor1));
console.log(divide2Integers(dividend2, divisor2));
console.log(divide2Integers(dividend3, divisor3));


