// 2133. Check if every row and column contains all numbers
// Tested successfully

let matrix1 = [[1, 2, 3], [3, 1, 2], [2, 3, 1]];
let matrix2 = [[1, 1, 1], [1, 2, 3], [1, 2, 3]];

function check(arr)
{
    let length = arr.length;
    if(length%2==1)
    {
        predictedSum = (length+1)*(Math.floor(length/2)) + Math.ceil(length/2);
    }
    else predictedSum = (length+1)*Math.floor(length/2);

    let sum = 0;
    for (item of arr) sum += item;
    
    if(sum!=predictedSum) return false;
    return true;
}

function checkMatrix(matrix)
{
    for(m of matrix) if(!check(m)) return false;
    return true;
}

console.log(checkMatrix(matrix1));
console.log(checkMatrix(matrix2));