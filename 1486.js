// 1486. XOR Operation in an Array
// Tested successfully

let n1 = 5, start1 = 0;
let n2 = 4, start2 = 3;

function xorOpInAnArray(n, start)
{
    let result = start;
    for (let i = 1; i < n; i++)
    {   
        result = result^(start + 2*i)
    }

    return result;
}

console.log(xorOpInAnArray(n1, start1));
console.log(xorOpInAnArray(n2, start2));