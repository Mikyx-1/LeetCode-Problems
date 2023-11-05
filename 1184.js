// 1184. Distance Between bus stops
// Tested successfully

let distance1 = [1, 2, 3, 4];


function distanceBetweenBusStops(distance, start, destination)
{
    let distanceRight = 0;
    let distanceLeft = 0;
    let distanceLength = distance.length;
    for (let i = start; i < destination; i++) distanceRight+= distance[i];

    let leftRoadIdx = destination;
    while(leftRoadIdx != start)
    {
        distanceLeft += distance[leftRoadIdx];
        if(leftRoadIdx + 1 >= distanceLength) leftRoadIdx = 0;
        else leftRoadIdx++;
    } 

    return Math.min(distanceLeft, distanceRight);
}

console.log(distanceBetweenBusStops(distance1, 0, 1));
console.log(distanceBetweenBusStops(distance1, 0, 2));
console.log(distanceBetweenBusStops(distance1, 0, 3));