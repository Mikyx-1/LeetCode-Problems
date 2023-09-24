// 942: DI String Match
// Tested successfully

let s1 = 'IDID';
let s2 = 'III';
let s3 = 'DDI';

function partitionInteger(res, num)
{
    if (Math.floor(num/10)==0) 
    {
        res.unshift(num%10);
        return res;
    }

    res.unshift(num%10)
    return partitionInteger(res, Math.floor(num/10));
}



function diStringMatch(string)
{   
    if(string.length < 1) return false;


    for (let i = Math.pow(10, string.length); i < Math.pow(10, string.length+1); i++)
    {
        let numArr = partitionInteger([], i);
        let cnt = 0;
        for(let j = 0; j < string.length; j++)
        {
            if(string[j] == 'I' && numArr[j+1] > numArr[j])
            {
                cnt++;
            }

            if(string[j] == 'D' && numArr[j+1] < numArr[j]) cnt++;
        }

        if(cnt==string.length) return i;
        
        
    }
}

console.log(diStringMatch(s1));
console.log(diStringMatch(s2));
console.log(diStringMatch(s3));




