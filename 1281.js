// 1281. Subtract the Product and Sum of Digits of and Integer
// Tested successfully

let n1 = 234, n2 = 4421;

function subtractTheProductandSum(n, sum = 0, product = 1)
{
    if(n==0){
        return product - sum;
    }

    sum = sum + n%10;
    product = product*(n%10)
    return subtractTheProductandSum(Math.floor(n/10), sum, product);
}


console.log(subtractTheProductandSum(n1));
console.log(subtractTheProductandSum(n2));