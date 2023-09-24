// 2739: Total Distance Traveled

let mainTank1 = 5;
let additionalTank1 = 10;

let mainTank2 = 1;
let additionalTank2 = 2;

let mainTank3 = 19;
let additionalTank3 = 17;

function totalDistanceTraveled(mainTank, additionalTank)
{
    let totalDistance = 0;
    let injection_volume = Math.floor(mainTank/5);
    
    
    totalDistance = (mainTank + Math.max(injection_volume, 0))*10

    return totalDistance;
}

console.log(totalDistanceTraveled(mainTank1, additionalTank1));
console.log(totalDistanceTraveled(mainTank2, additionalTank2));
console.log(totalDistanceTraveled(mainTank3, additionalTank3));

