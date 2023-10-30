// 1317. Convert Integer to the Sum of 2 No-Zero Integers
// Tested successfully

let n1 = 2, n2 = 11;


function convertInteger2TheSumOf2Integers(n)
{   
    let result = [];
    for (let i = 1; i < Math.floor(n/2)+1; i++)
    {
        integer1 = i.toString();
        integer2 = (n-i).toString();
        let breakFlag = false;
        for(let i = 0; i < integer2.length; i++)
        {
            if(integer1[i] == "0" || integer2[i] == "0") 
            {
                breakFlag = true;
                break;
            }
        }

        if(breakFlag == false) return [i, n-i]

    }
}

console.log(convertInteger2TheSumOf2Integers(2));
console.log(convertInteger2TheSumOf2Integers(n2));