// 64: Minimum Path sum
// Tested successfully


let grid1 = [[1,3,1],[1,5,1],[4,2,1]];
let grid2 = [[1,2,3],[4,5,6]];



function minimumPathSum(grid)
{
    let numRows = grid.length;
    let numCols = grid[0].length;

    function dfs(i, j, sum)
    {
        if(i < 0 || j < 0 || i >= numRows || j >= numCols) return Infinity;
        if(i==numRows-1 && j == numCols-1)
        {
            return sum + grid[i][j];
        }
        
        sum += grid[i][j];
        return Math.min(dfs(i+1, j, sum), dfs(i, j+1, sum));
    }

    return dfs(0, 0, 0);
}


console.log(minimumPathSum(grid1));
console.log(minimumPathSum(grid2));
