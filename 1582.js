// 1582. Special Positions in a Binary Matrix
// Tested successfully

let mat1 = [[1,0,0],[0,0,1],[1,0,0]];
let mat2 = [[1,0,0],[0,1,0],[0,0,1]];

function specialPositionsInABinaryMatrix(mat)
{
    let dictRow = {};
    let dictCol = {};
    let cnt = 0;
    for (let i = 0; i < mat.length; i++)
    {
        for (let j = 0; j < mat[0].length; j++)
        {
            if(mat[i][j] == 1) 
            {
                incrementedFlag = false;

                if(dictRow[i] == null) {
                    dictRow[i] = "exists";
                    incrementedFlag = true;
                }

                if(dictCol[j] == null)
                {
                    dictCol[j] = "exists";
                    incrementedFlag = true;
                }
                else{
                    incrementedFlag = false;
                }

                if(incrementedFlag) cnt++;
                else cnt--;


            }
        }
    }


    return cnt;
}

console.log(specialPositionsInABinaryMatrix(mat1));
console.log(specialPositionsInABinaryMatrix(mat2));