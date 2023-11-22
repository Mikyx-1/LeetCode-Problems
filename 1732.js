// 1732. Find The Highest Altitude
// Tested successfully

let gain1 = [-5,1,5,0,-7], gain2 = [-4,-3,-2,-1,4,3,2];

function findTheHighestAltitude(gain)
{
    let currHeight = 0;
    let highestAltitude = currHeight;
    for (g of gain)
    {
        currHeight += g;
        if(currHeight > highestAltitude) highestAltitude = currHeight;
    }
    return highestAltitude;
}

console.log(findTheHighestAltitude(gain1));
console.log(findTheHighestAltitude(gain2));