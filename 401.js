// 401: Binary Watch


function convertBin2Dec(binList, option='hour')
{
    let sum = 0;
    for (let i = binList.length-1; i > -1; i--)
    {
        sum += binList[binList.length-1-i]*Math.pow(2, i);
    }

    if(option=='hour')
    {
        sum = sum.toString();
        return sum;
    }
    else{
        sum = sum.toString();
        if(sum.length < 2) return '0' + sum.toString()
    }
}


function permuteArray(arr) {
    const result = [];
  
    function permuteHelper(currentPerm, remainingArr) {
      if (remainingArr.length === 0) {
        result.push(currentPerm);
        return;
      }
  
      for (let i = 0; i < remainingArr.length; i++) {
        const newPerm = currentPerm.concat(remainingArr[i]);
        const newRemaining = remainingArr.slice(0, i).concat(remainingArr.slice(i + 1));
        permuteHelper(newPerm, newRemaining);
      }
    }
  
    permuteHelper([], arr);
    return result;
  }

let turnedOn1 = 1
let turnedOn2 = 9;

function binaryWatch(turnedOn){
  if (turnedOn >)
}
