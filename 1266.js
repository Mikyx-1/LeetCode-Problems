// 1266: Minimum Time Visiting All Points
// Tested successfully


points1 = [[1, 1], [3, 4], [-1, 0]];
points2 = [[3, 2], [-2, 2]];

function sign(num)
{   if (num<0) return -1
    if (num==0) return 0;
    return 1
}

function minimumTimeVisitingAllPoints(points)
{
    let currPoint = points[0];
    let totalTime = 0;
    let destinationIdx = 1;
    while(destinationIdx < points.length)
    {
        while(true)
        {
            distX = points[destinationIdx][0] - currPoint[0];
            distY = points[destinationIdx][1] - currPoint[1];


            currPoint[0] += sign(distX);
            currPoint[1] += sign(distY);
            totalTime++;
            
            if (currPoint[0] == points[destinationIdx][0] && currPoint[1] == points[destinationIdx][1]){
                break;
            }
        }

        
        destinationIdx++;
    }

    return totalTime;
}

console.log(minimumTimeVisitingAllPoints(points1));
console.log(minimumTimeVisitingAllPoints(points2));
console.log(minimumTimeVisitingAllPoints(points3));