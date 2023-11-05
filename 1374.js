// 1374. Generate a String with Characters that have odd counts
// tested successfully

let n1 = 4, n2 = 2, n3 = 7;

function generateOddString(n)
{
    if(n%2==1) return "a".repeat(n);

    if(n%2==0) return "a".repeat(n-1) + "b";
}

console.log(generateOddString(n1));
console.log(generateOddString(n2));
console.log(generateOddString(n3));