// 1952. Three Divisors
// Tested successfully

let n1 = 2; n2 = 4;

function checkThreeDivisors(n)
{
    if (n < 3) return false;
    let cnt = 0;
    for (i = 2; i < Math.ceil(Math.sqrt(n)) + 1; i++)
    {
        if(n%i==0) cnt++;

        if(cnt > 1) return false;
    }

    return true;
}

console.log(checkThreeDivisors(n1));
console.log(checkThreeDivisors(n2));