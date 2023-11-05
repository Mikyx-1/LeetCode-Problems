// 1030. Matrix Cells in Distance Order
// Tested successfully

let rows1 = 1, cols1 = 2, rCenter1 = 0, cCenter1 = 0;
let rows2 = 2, cols2 = 2, rCenter2 = 0, cCenter2 = 1;
let rows3 = 2, cols3 = 3, rCenter3 = 1, cCenter3 = 2;


function calculateDist(point1, point2)
{
    return Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1]);
}

function matrixCellsInDistanceOrder(rows, cols, rCenter, cCenter)
{
    let results = [[0, [rCenter, cCenter]]];
    
    for (let xi = 0; xi < rows; xi++)
    {
        for (let xj = 0; xj < cols; xj++)
        {
            if(xi != rCenter || xj != cCenter)
            {
                dist = calculateDist([xi, xj], [rCenter, cCenter]);
                results.push([dist, [xi, xj]]);
            }
        }
    }

    results.sort((a, b) => a[0] - b[0]);
    return results.map(x => x[1]);
}


console.log(matrixCellsInDistanceOrder(rows1, cols1, rCenter1, cCenter1));
console.log(matrixCellsInDistanceOrder(rows2, cols2, rCenter2, cCenter2));
console.log(matrixCellsInDistanceOrder(rows3, cols3, rCenter3, cCenter3));