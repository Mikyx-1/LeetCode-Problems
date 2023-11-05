// 415. Add Strings

let num1 = "409", num2 = "501";


function addStrings(num1, num2)
{
    let lastIdx1 = num1.length-1;
    let lastIdx2 = num2.length - 1;

    if (lastIdx2 > lastIdx1) return addStrings(num2, num1)

    let result = "";
    let residual = 0;
    for (let i = lastIdx1; i > -1; i--)
    {
        if(lastIdx2 > -1)
        {
            temp_result = parseInt(num1[i]) + parseInt(num2[lastIdx2]) + residual;
            if (temp_result >= 10){
                residual = 1;
                temp_result = temp_result%10;
            }
            else{
                residual = 0;
            }
            result = temp_result.toString() + result;            
            lastIdx2--;

        }
        else{
            temp_result = residual + parseInt(num1[i]); 
            residual = Math.floor(temp_result/10);
            temp_result = temp_result%10;
            result = temp_result.toString() + result;
        }
    }

    
    return result;
}


console.log(addStrings(num1, num2));