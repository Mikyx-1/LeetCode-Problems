// 1646. Get Maximum in Generated Array
// Tested successfully

let n1 = 7, n2 = 2, n3 = 3;


function maximumInGeneratedArray(n)
{
    let arr = [0, 1];
    let maxVal = 0;
    for (let i = 2; i < n+1; i++){
        if(i%2==0)
        {
            item = arr[i/2];
            if(item>maxVal) maxVal = item;
            arr.push(arr[i/2]);
        }
        else{
            idx = Math.floor(i/2)
            item = arr[idx] + arr[idx+1];
            if(item  > maxVal) maxVal = item;
            arr.push(arr[idx] + arr[idx+1]);
        }
    }

    return maxVal;
}

console.log(maximumInGeneratedArray(n1));
console.log(maximumInGeneratedArray(n2));
console.log(maximumInGeneratedArray(n3));

