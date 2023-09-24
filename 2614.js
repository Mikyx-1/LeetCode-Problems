// 2614: Prime In Diagonal
// Tested successfully



let nums1 = [[1,2,3],[5,6,7],[9,10,11]];
let nums2 = [[1,2,3],[5,17,7],[9,11,10]];


function checkPrime(n)
{   if (n < 2) return false;

    for (let i = 2; i < parseInt(Math.sqrt(n)); i++)
    {
        if(n%i==0) return false;
    }
    return true;
}


function primeInDiagonal(nums)
{
    let numRows = nums.length;
    let numCols = nums[0].length;
    let maxPrime = 0;

    for (let i = 0; i < numRows; i++)
    {
        if(checkPrime(nums[i][i]) && nums[i][i] > maxPrime) maxPrime = nums[i][i];

        if(checkPrime(nums[i][numCols-1-i]) && nums[i][numCols-1-i] > maxPrime) maxPrime = nums[i][numCols-1-i];
    }
    
    return maxPrime;
}

console.log(primeInDiagonal(nums1));
console.log(primeInDiagonal(nums2));