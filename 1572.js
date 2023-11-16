// 1572. Matrix Diagonal Sum
// Tested successfully

let mat1 = [[1,2,3], [4,5,6], [7,8,9]];
let mat2 = [[1,1,1,1], [1,1,1,1], [1,1,1,1], [1,1,1,1]];
let mat3 = [[5]];

function matrixDiagonalSum(mat)
{
    let numRows = mat.length
    let numCols = mat[0].length;
    let sum = 0;
    let colIdx = 0;
    for (let i = 0; i < numRows; i++)
    {   
        if(colIdx != numCols - 1 - colIdx) sum += mat[i][colIdx] + mat[i][numCols-1-colIdx];
        else sum += mat[i][colIdx];
        colIdx++;
    }

    return sum;
}

console.log(matrixDiagonalSum(mat1));
console.log(matrixDiagonalSum(mat2));
console.log(matrixDiagonalSum(mat3));
