// 2651: Calculate delayed arrival time
// Tested successfully

let arrivalTime1 = 15;
let delayedTime1 = 5;

let arrivalTime2 = 13;
let delayedTime2 = 11;

function calculateDelayedArrivalTime(arrivialTime, delayedTime)
{
    return (arrivialTime+delayedTime)%24;
}

console.log(calculateDelayedArrivalTime(arrivalTime1, delayedTime1));
console.log(calculateDelayedArrivalTime(arrivalTime2, delayedTime2));