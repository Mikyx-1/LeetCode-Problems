// 2643: Row with Maximum Ones

let mat1 = [[0, 1], [1, 0]];
let mat2 = [[0, 0, 0], [0, 1, 1]];
let mat3 = [[0, 0], [1, 1], [0, 0]];


function rowWithMaximumOnes(mat)
{
    let rowPos = 0;
    let maxNumOnes = 0;
    for (let i = 0; i < mat.length; i++)
    {   let numOnes = 0;
        
        for (item of mat[i])
        {   
            if (item==1) numOnes++;
        }

        if (numOnes > maxNumOnes)
        {
            rowPos = i;
            maxNumOnes = numOnes;
        }
    }

    return [rowPos, maxNumOnes];
}

console.log(rowWithMaximumOnes(mat1));
console.log(rowWithMaximumOnes(mat2));
console.log(rowWithMaximumOnes(mat3));
