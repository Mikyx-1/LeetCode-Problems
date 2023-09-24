// 2843: Count Symmetric Integers


// Step 1: Split digits

// Step 2: Calculate the sum

// Tested successfully


let num1 = 12345;


function splitNum(num){
    
    let digits = [];
    while(num/10 != 0)
    {
        digits.splice(0, 0, num%10)
        num = Math.floor(num/10);
    }

    return digits;
}


function checkSymmetric(digits)
{
    if (digits.length%2 == 0)
    {
        let middle_pos = parseInt(digits.length/2);
        let sum1 = 0;
        let sum2 = 0;
        for (let i = 0; i < middle_pos; i++)
        {
            sum1 += digits[i];
            sum2 += digits[middle_pos+i]
        }
        if (sum1 == sum2) 
        {   
            return true;
        }
   
        return false;

    }

    return false;
}




function countSymetrics(low, high)
{   
    let res = [];
    for (let i = low; i < high; i++)
    {
        if(checkSymmetric(splitNum(i)))
        {
            res.push(i)
        }
    }
    return res;
}


console.log(countSymetrics(1200, 1230))

