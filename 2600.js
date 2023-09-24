// 2600: K Items with the maximum sum
// Tested successfully

let ex1 = {'numOnes':3, 'numZeros':2, 'numNegOnes':0, 'k':2};
let ex2 = {'numOnes':3, 'numZeros':2, 'numNegOnes':0, 'k':4}





function kItemsWithTheMaximumSum(numOnes, numZeros, numNegOnes, k){
    let arr = new Array(numOnes + numZeros + numNegOnes).fill(0);

    
    for (let i = 0; i < numOnes; i++)
    {
        arr[i] = 1;
    }

    for (let j = numOnes + numZeros; j < numOnes + numZeros + numNegOnes; j++)
    {
        arr[j] = -1;
    }

    return arr.slice(0, k).reduce((partialSum, a) => partialSum+a, 0);
}


console.log(kItemsWithTheMaximumSum(ex1['numOnes'], ex1['numZeros'], ex1['numNegOnes'], ex1['k']));
console.log(kItemsWithTheMaximumSum(ex2['numOnes'], ex2['numZeros'], ex2['numNegOnes'], ex2['k']));

