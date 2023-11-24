// 2729. Check If The Number is Fascinating
// Tested successfully

let n1 = 192, n2 = 100;

function checkIfTheNumberIsFascinating(n)
{
    let targetSum = 45;
    let targetProd = 362880;
    
    let sum = 0;
    let prod = 1;
    n = n.toString() + (n*2).toString() + (3*n).toString();
    for (item of n) {
        sum += parseInt(item);
        prod *= item;
    }
    if(sum == targetSum && prod == targetProd) return true;
    return false;
}

console.log(checkIfTheNumberIsFascinating(n1));
console.log(checkIfTheNumberIsFascinating(n2));