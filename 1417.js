// 1417. Reformat the string
// Tested successfully

// O(n)

let s1 = "a0b1c2", s2 = "leetcode", s3 = "1229857369";

function reformatString(string)
{
    let charArr = [], charLength=0;
    let numArr = [], numLength=0;
    
    for (let item of string)
    {
        let ascii_code = item.charCodeAt(0);
        if(ascii_code > 96 && ascii_code < 123) 
        {
            charArr.push(item);
            charLength++;
        }
        else{
            numArr.push(item);
            numLength++;
        }
    }
    
    let result = "";
    if(numLength - charLength == 1)
    {
        for (let i = 0; i < charLength; i++) result = result + numArr[i] + charArr[i];
        result = result + numArr[numLength-1];
    }
    else if (charLength - numLength == 1)
    {
        for (let i = 0; i < numLength; i++) result = result + charArr[i] + numArr[i];
        result = result + charArr[charLength-1];
    }
    else if(numLength - charLength == 0)
    {
        for(let i = 0; i < numLength; i++) result = result + charArr[i] + numArr[i];
    }

    return result;
}

console.log(reformatString(s1));
console.log(reformatString(s2));
console.log(reformatString(s3));
console.log(reformatString("123ab"));