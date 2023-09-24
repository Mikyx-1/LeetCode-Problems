// 2844: Minimum Operations to make a special number
// Tested Successfully
// Algorithm

let num1 = '2245047';
let num2 = '2908305';
let num3 = '10';



function minOperationsToMakeSpecialNumber(numInString){

    if(numInString.length == 2)
    {
        if (numInString.split('').includes('0'))
        {
            return 1;
        }
        return 2;
    }


    let minOperations = numInString.length;
    let lockList = ['00', '52', '05', '57'];
    let candidates = []
    for (let i = numInString.length-1; i > 0; i--)
    {
        for (let j = i-1 ; j > -1; j--)
        {
            if(lockList.includes(numInString[i]+numInString[j]))
            {
                let numOperations = (i-j-1) + (numInString.length-i-1);
                if (numOperations < minOperations)
                {
                    minOperations = numOperations;

                }

  
            }
        }
    }

    return minOperations;
}


console.log(minOperationsToMakeSpecialNumber(num1));

