// 2022. Convert 1D Array into 2D Array
// Tested successfully

let original1 = [1, 2, 3, 4], m1 = 2, n1 = 2;
let original2 = [1, 2, 3], m2 = 1, n2 = 3;
let original3 = [1, 2], m3 = 1, n3 = 1;


function convert1Dto2D(original, m, n)
{
    let matrix = [];
    let length = original.length;
    if (m*n!=length) return [];

    for(let i = 0; i < m; i++)
    {
        matrix.push(original.slice(n*i, (i+1)*n))
    }
    return matrix;
}

console.log(convert1Dto2D(original1, m1, n1));
console.log(convert1Dto2D(original2, m2, n2));
console.log(convert1Dto2D(original3, m3, n3));
