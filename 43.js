// 43. Multiply Strings
// Tested successfully


let num1 = "2727", num2 = "4584";

function multiplyDigit(num1, digit)
{  
    let lastIdx = num1.length - 1; 
    let firstMultiplication = parseInt(num1[lastIdx])*parseInt(digit) 
     
    let result = (firstMultiplication%10).toString();
    residual = Math.floor(firstMultiplication/10);

    for (let i = lastIdx-1; i > -1; i--)
    {
        temp_result = parseInt(digit)*num1[i] + residual;
        residual = Math.floor(temp_result/10);
        result = (temp_result%10).toString() + result;
    }
    if (residual > 0)
    {
        result = residual.toString() + result;
    }
    return result;
}

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


function numDecompose(num)
{
    let length = num.length;
    let result = [];
    for (let i = 0; i < length; i++)
    {
        res = num[i] + "0".repeat(length-i-1);
        result.push(res);
    }
    return result;
}

function multiplyStrings(num1, num2)
{
    let num2Components = numDecompose(num2);
    let result = "0";

    for (num2Component of num2Components)
    {
        res = multiplyDigit(num1, num2Component[0]);
        res = res + "0".repeat(num2Component.length-1);
        result = addStrings(result, res);
        // console.log(res);

    }
    return result;
}

console.log(multiplyStrings("123", "123"));
