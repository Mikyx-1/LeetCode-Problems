// Find the K-Beauty of a Number
// Tested successfully

let num1 = 240, k1 = 2;
let num2 = 430043, k2 = 2;

function findKBeautyOfANumber(num, k)
{
    let string = num.toString();
    let cnt = 0;
    for (let i = 0; i < string.length-k+1; i++)
    {
        if(num%parseInt(string.slice(i, i+2))==0) {
            cnt++;
        }
    }
    return cnt;
}

console.log(findKBeautyOfANumber(num1, k1));
console.log(findKBeautyOfANumber(num2, k2));