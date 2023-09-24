// 120. Triangle
// Tested successfully

let triangle1 = [[2],[3,4],[6,5,7],[4,1,8,3]];
let triangle2 = [[-10]];
let triangle3 = [[1], [2, 3], [4, 5, 6], [7, 8, 9, 10], [11, 12, 13, 14, 15]]


function minimumPathSum(triangle)
{
    let sum = [[triangle[0][0]]];
    for(let i = 1; i <triangle.length; i++)
    {   
        sum[i] = [];
        for(let j = 0; j < sum[i-1].length; j++)
        {
            if(j < triangle[i].length)
            {
                sum[i].push(triangle[i][j] + sum[i-1][j]);
            }

            if(j+1 < triangle[i].length)
            {
                sum[i].push(triangle[i][j+1] + sum[i-1][j]);
            }
            
            
        }
    }

    
    return Math.min(...sum[sum.length-1]);
}


console.log(minimumPathSum(triangle1));
console.log(minimumPathSum(triangle2));
console.log(minimumPathSum(triangle3));