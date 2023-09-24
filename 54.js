// 54: Spiral Matrix
// Tested successfully


let matrix1 = [[1,2,3],[4,5,6],[7,8,9]];
let matrix2 = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
let matrix3 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]

function extractBoundary(matrix, boundary_top, boundary_bot, boundary_left, boundary_right)
{
    let res = [];
    for (let j = boundary_left; j <= boundary_right; j++)
    {
        res.push(matrix[boundary_top][j])
    }

    for(let i = boundary_top + 1; i < boundary_bot; i++)
    {
        res.push(matrix[i][boundary_right]);
    }

    if (boundary_bot != boundary_top)
    {
        for(let j = boundary_right; j >= boundary_left; j--)
        {
            res.push(matrix[boundary_bot][j]);
        }
    }


    for(let i = boundary_bot-1; i > boundary_top; i--)
    {
        res.push(matrix[i][boundary_left]);
    }

    return res;
}

function spiralMatrix(matrix)
{

    let numRows = matrix.length;
    let numCols = matrix[0].length;
    let boundary_top = 0;
    let boundary_bot = matrix.length - 1;
    let boundary_left = 0;
    let boundary_right = matrix[0].length-1;
    let result = [];
    while(boundary_top<boundary_bot)
    {
        result.push(...extractBoundary(matrix, boundary_top, boundary_bot, boundary_left, boundary_right));
        boundary_bot--;
        boundary_top++;
        boundary_left++;
        boundary_right--;

    }
    result.push(...extractBoundary(matrix, boundary_top, boundary_bot, boundary_left, boundary_right));
    


    return result;

}

// console.log(extractBoundary(matrix3, 1, 2, 1, 2))
console.log(spiralMatrix(matrix3));