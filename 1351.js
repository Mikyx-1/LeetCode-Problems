// 1351. Count Negative Numbers in a Sorted Matrix
// Tested successfully

let grid1 =  [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]];
let grid2 = [[3,2],[1,0]];

function countNegatives(grid){
    let rows = grid.length;
    let cols = grid[0].length;

    let count = 0;
    let r = rows-1, c = 0;
    while(r >= 0 && c < cols)
    {
        if( grid[r][c] < 0)
        {
            count += cols-c;
            r--;
        }
        else c++
    }

    return count;
}

console.log(countNegatives(grid1));
console.log(countNegatives(grid2));