//-1304. Find N Unique Integers Sum up to 0
// Tested successfully

let n1 = 5, n2 = 3, n3 = 1;

function findNUniqueIntegersSumUpToZero(n)
{
    let result = [];
    if (n%2==0)
    {
        for (let i = -Math.floor(n/2); i < Math.floor(n/2)+1; i++)
        {
            if(i!= 0) result.push(i);
        }
    }

    else{
        for (let i = -Math.floor(n/2); i < Math.floor(n/2)+1; i++)
        {
            result.push(i);
        }
    }

    return result;
}

console.log(findNUniqueIntegersSumUpToZero(n1));
console.log(findNUniqueIntegersSumUpToZero(n2));
console.log(findNUniqueIntegersSumUpToZero(n3));