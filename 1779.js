// 1779. Find Nearest Point that has the same X or Y Coordinate
// Tested successfully

// let x = 3, y = 4, points = [[1,2],[3,1],[2,4],[2,3],[4,4]];

let x = 3, y = 4, points = [[3,4]];

function findNearestPoint(x, y, points)
{
    let minVal = Infinity;
    let minPos = 0;
    for (let i =0; i < points.length; i++)
    {
        if(points[i][0] == x || points[i][1] == y)
        {
            let dist = Math.abs(x-points[i][0]) + Math.abs(y - points[i][1]);
            if(dist < minVal){
                minVal = dist;
                minPos = i;
            }
        }
    }

    return minPos;
}

console.log(findNearestPoint(x, y, points));