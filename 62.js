//62:   Unique Paths
// Algorithm: Backtracking

function uniquePaths(m, n)
{
    let numUniquePaths = 0;
    function backtracking(i, j)
    {

        if(i==m-1 && j == n-1) 
        {
            numUniquePaths++;
            return true;
        }

        if(i < m-1)
        {
            backtracking(i+1, j);
        }

        if(j < n-1)
        {
            backtracking(i, j+1);
        }
    }

    backtracking(0, 0);
    return numUniquePaths;
}

console.log(uniquePaths(2, 2));