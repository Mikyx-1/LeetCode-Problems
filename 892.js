// 892. Surface Area of 3D Shapes
// Tested successfully

let grid1 = [[1,2],[3,4]];
let grid2 = [[1,1,1],[1,0,1],[1,1,1]];
let grid3 = [[2,2,2],[2,1,2],[2,2,2]];


function surfaceAreaOf3DShapes(grid)
{
    if(grid.length == 1) return 2 + 4*grid[0];
    let totalArea = 2*grid.length*grid.length;
    
    let numRows = grid.length;
    let numCols = grid[0].length;

    for (let i = 0; i < numRows; i++)
    {
        for (let j = 0; j < numCols; j++)
        {
            if(i == 0)
            {
                if(j==0)
                {
                    totalArea = totalArea + 2*grid[i][j]*1 + Math.max(0, grid[i][j] - grid[i][j+1]) + Math.max(0, grid[i][j] - grid[i+1][j]);
                }

                else if (j == numCols - 1)
                {
                    totalArea = totalArea + 2*grid[i][j]*1 + Math.max(0, grid[i][j] - grid[i+1][j]) + Math.max(0, grid[i][j] - grid[i][j-1]);
                }

                else{
                    totalArea = totalArea + grid[i][j]*1 + Math.max(0, grid[i][j] - grid[i][j+1]) + Math.max(0, grid[i][j] - grid[i+1][j]) + Math.max(0, grid[i][j] - grid[i][j-1]);
                }
            }
            else if (i == numRows - 1)
            {
                if(j==0)
                {
                    totalArea = totalArea + 2*grid[i][j]*1 + Math.max(0, grid[i][j] - grid[i][j+1]) + Math.max(0, grid[i][j] - grid[i-1][j]);
                }

                else if (j == numCols - 1)
                {
                    totalArea = totalArea + 2*grid[i][j]*1 + Math.max(0, grid[i][j] - grid[i-1][j]) + Math.max(0, grid[i][j] - grid[i][j-1]);
                }

                else{
                    totalArea = totalArea + grid[i][j] + Math.max(0, grid[i][j] - grid[i][j+1]) + Math.max(0, grid[i][j] - grid[i-1][j]) + Math.max(0, grid[i][j] - grid[i][j-1]);
                }
            }

            else{
                if(j==0)
                {
                    totalArea = totalArea  + grid[i][j] + Math.max(0, grid[i][j] - grid[i][j+1]) + Math.max(0, grid[i][j] - grid[i-1][j]) + Math.max(0, grid[i][j] - grid[i+1][j]);
                }

                else if (j == numCols - 1)
                {
                    totalArea = totalArea + grid[i][j] +  Math.max(0, grid[i][j] - grid[i-1][j]) + Math.max(0, grid[i][j] - grid[i][j-1]) + Math.max(0, grid[i][j] - grid[i+1][j]);
                }

                else{
                    totalArea = totalArea + Math.max(0, grid[i][j] - grid[i][j+1]) + Math.max(0, grid[i][j] - grid[i-1][j]) + Math.max(0, grid[i][j] - grid[i][j-1]) + Math.max(0, grid[i][j] - grid[i+1][j]);
                }
            }
        }
    }

    for (let i = 0; i < numRows; i++)
    {
        for (let j = 0; j < numCols; j++)
        {
            if(grid[i][j] == 0) totalArea -= 2;
        }
    }
    

    return totalArea;
}

console.log(surfaceAreaOf3DShapes(grid1));
console.log(surfaceAreaOf3DShapes(grid2));
console.log(surfaceAreaOf3DShapes(grid3));