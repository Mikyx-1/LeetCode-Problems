// 1925. Count Square Sum Triples
// Tested successfully

let n1 = 5, n2 = 10;

function checkSquareNumber(n)
{
    let sqrt = Math.sqrt(n);
    if(sqrt == parseInt(sqrt)) return true;
    return false;
}

function countSquareSumTriples(n)
{
    let cnt = 0;
    for (let i = 3; i < n; i++)
    {
        for (let j = i+1; j <= n+1; j++)
        {
            if(checkSquareNumber(i*i + j*j)) cnt++; 
        }
    }
    return cnt*2;
}

console.log(countSquareSumTriples(n1));
console.log(countSquareSumTriples(n2));
console.log(countSquareSumTriples(250));