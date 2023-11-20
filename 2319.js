// 2319. check if Matrix is X-Matrix
// Tested successfully

let grid1 = [[2,0,0,1],[0,3,1,0],[0,5,2,0],[4,0,0,2]];
let grid2 = [[5,7,0],[0,3,1],[0,5,0]];

function checkIfMatrixIsXMatrix(grid)
{
    let numRows = grid.length;
    let numCols = grid[0].length;
    let check1_ptr = 0;
    let check2_ptr = numCols-1;

    for (let i = 0; i < numRows; i++)
    {
        for (let j = 0; j < numCols; j++)
        {
            if(j == check1_ptr || j == check2_ptr) {
                if(grid[i][j] == 0) return false;
            }
            else {
                if(grid[i][j] != 0) return false;
            }
        }
        check1_ptr++;
        check2_ptr--;
    }

    return true;
}

console.log(checkIfMatrixIsXMatrix(grid1));
console.log(checkIfMatrixIsXMatrix(grid2));