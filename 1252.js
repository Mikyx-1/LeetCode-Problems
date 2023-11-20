// 1252. Cells with odd values in a matrix
// Teted successfully

let m1 = 2, n1 = 3, indices1 = [[0,1],[1,1]];
let m2 = 2, n2 = 2, indices2 = [[1,1],[0,0]];


function cellsWithOddValuesInAMatrix(m, n, indices)
{
    let matrix = [];
    let oddCnt = 0;
    let firstTime = true;
   
    for (let i =0; i < m; i++)
    {
        matrix.push([]);
        for (let j = 0; j < n; j++)
        {
            matrix[i][j] = false;
        }
    }
    for (indice of indices)
    {
        for (let col = 0; col < n; col++)
        {
            matrix[indice[0]][col] = !matrix[indice[0]][col];
            if(matrix[indice[0]][col]) oddCnt++;
            else oddCnt--;
        }

        for (let row = 0; row < m; row++)
        {
            matrix[row][indice[1]] = !matrix[row][indice[1]]
            if(matrix[row][indice[1]]) oddCnt++;
            else oddCnt--;
        }

    }
    return oddCnt;
}

console.log(cellsWithOddValuesInAMatrix(m1, n1, indices1));
console.log(cellsWithOddValuesInAMatrix(m2, n2, indices2));