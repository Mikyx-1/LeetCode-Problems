// Find the Width of Columns of a grid
// Tested successfully

let grid1 = [[1], [22], [333]];
let grid2 = [[-15, 1, 3], [15, 7, 12], [5, 6, -2]];


function maxLen(arr){
    let maximumLength = 0;
    for (item of arr)
    {
        if(item.toString().length > maximumLength) maximumLength = item.toString().length;
    }
    return maximumLength;
}

function findWidthOfColumnsOfAGrid(grid)
{
    let numRows = grid.length;
    let numCols = grid[0].length;
    let maxWidths = [];
    for (let j = 0; j < numCols; j++)
    {   let buffer = [];
        for(let i = 0; i < numRows; i++)
        {
            buffer.push(grid[i][j]);
        }

        maxWidths.push(maxLen(buffer));
    }
    return maxWidths;
}

console.log(findWidthOfColumnsOfAGrid(grid1));
console.log(findWidthOfColumnsOfAGrid(grid2));