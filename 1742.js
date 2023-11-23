// 1742. Maximum Number of Balls In a box
// Tested successfully


let lowLimit1 = 1, highLimit1 = 10;
let lowLimit2 = 5, highLimit2 = 15;
let lowLimit3 = 19, highLimit3 = 28;

function sumDigits(num)
{
    if(Math.floor(num/10) == 0) return num%10;
    return num%10 + sumDigits(Math.floor(num/10));
}

function maximumNumberOfBallsInABox(lowLimit, highLimit)
{
    let dict = {}
    let maxBall = -1;
    for(let i = lowLimit; i < highLimit+1; i++)
    {
        numDigits = sumDigits(i)
        if(dict[numDigits] == null) dict[numDigits] = 1;
        else dict[numDigits]++;

        if(dict[numDigits] > maxBall) maxBall = dict[numDigits];
    }
    return maxBall;
}

console.log(maximumNumberOfBallsInABox(lowLimit1, highLimit1));
console.log(maximumNumberOfBallsInABox(lowLimit2, highLimit2));
console.log(maximumNumberOfBallsInABox(lowLimit3, highLimit3));