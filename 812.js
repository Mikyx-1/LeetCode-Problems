// Largest Triangle Area
// Tested successfully

let points1 = [[0,0],[0,1],[1,0],[0,2],[2,0]];
let points2 = [[1,0],[0,0],[0,1]];

function largestTriangleArea(points)
{
    let length = points.length;
    let maxArea = -1;
    for (let i = 0; i < length-2; i++)
    {
        for (let j = i+1; j < length-1; j++)
        {
            for (let k = j+1; k < length; k++)
            {

                edge1 = Math.sqrt(Math.pow(points[j][0] - points[i][0], 2) + Math.pow(points[j][1] - points[i][1], 2));
                edge2 = Math.sqrt(Math.pow(points[k][0] - points[i][0], 2) + Math.pow(points[k][1] - points[i][1], 2));
                edge3 = Math.sqrt(Math.pow(points[j][0] - points[k][0], 2) + Math.pow(points[j][1] - points[k][1], 2));
                if (edge3 > edge1 && edge3 > edge2)
                {
                    currArea = 0.5*edge1*edge2;
                }
                else if(edge2 > edge1 && edge2 > edge3) currArea = 0.5*edge1*edge3;
                else currArea = 0.5*edge2*edge3;

                if(currArea > maxArea) maxArea = currArea;

            }
        }
    }
    return maxArea;
}

console.log(largestTriangleArea(points1));
console.log(largestTriangleArea(points2));