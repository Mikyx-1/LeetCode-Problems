// 2520. Count the Digits That Divide a Number
// Tested successfully

let num1 = 7, num2 = 121, num3 = 1248;

function countTheDigitsThatDivideANumber(num)
{

    let cnt = 0;
    let num_ = num;
    while(num_ > 0)
    {
        let digit = num_%10;
        num_ = Math.floor(num_/10);
        if(num%digit==0) cnt++;
    }

    return cnt;
}

console.log(countTheDigitsThatDivideANumber(num1));
console.log(countTheDigitsThatDivideANumber(num2));
console.log(countTheDigitsThatDivideANumber(num3));
