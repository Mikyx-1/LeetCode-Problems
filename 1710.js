// 1710. Maximum Units on a Truck
// Tested successfully

let boxTypes1 = [[1,3],[2,2],[3,1]], truckSize1 = 4;
let boxTypes2 = [[5,10],[2,5],[4,7],[3,9]], truckSize2 = 10;

function maximumUnitsOnATruck(boxTypes, truckSize)
{
    boxTypes.sort((a, b) => (b[1] - a[1]));
    let totalUnits = 0;
    let boxTypeIdx = 0;
    while(truckSize > 0)
    {
        totalUnits += boxTypes[boxTypeIdx][1];
        boxTypes[boxTypeIdx][0]--;
        if(boxTypes[boxTypeIdx][0] == 0) boxTypeIdx++;
        truckSize--;
    }
    return totalUnits;
}

console.log(maximumUnitsOnATruck(boxTypes1, truckSize1));
console.log(maximumUnitsOnATruck(boxTypes2, truckSize2));