// 2923. Find Champion I
// Tested successfully


let grid1 = [[0, 1], [0, 0]], grid2 = [[0, 0, 1], [1, 0, 1], [0, 0, 0]];

function findChampion(grid)
{
    let numCols = grid[0].length;
    let expectingSum = numCols - 1;
    for (let i = 0; i < grid.length; i++)
    {
        let sum = 0;
        for (item of grid[i]) sum = sum + item;
        if(sum == expectingSum) return i;
    }
}


console.log(findChampion(grid1));
console.log(findChampion(grid2));