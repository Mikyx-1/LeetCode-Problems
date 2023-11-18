// 1880. Check if word equals summation of 2 words
// Tested successfully

let firstWord1 = "acb", secondWord1 = "cba", targetWord1 = "cdb"
let firstWord2 = "aaa", secondWord2 = "a", targetWord2 = "aab"
let firstWord3 = "aaa", secondWord3 = "a", targetWord3 = "aaaa"

function evalBase10(numInString)
{
    for (let i = 0; i < numInString.length; i++)
    {
        if(numInString.charCodeAt(i) - 48 >0) return eval(numInString.slice(i, ))
    }

    return 0;
}


function checkEqualSummation(firstWord, secondWord, targetWord)
{
    let sum1 = "";
    let sum2 = "";
    let sum3 = "";

    let idx1 = 0;
    let idx2 = 0;
    let idx3 = 0;

    let length1 = firstWord.length;
    let length2 = secondWord.length;
    let length3 = targetWord.length;

    while(true)
    {
        if(idx1 < length1)
        {
            sum1 += (firstWord.charCodeAt(idx1) - 97).toString();
            idx1++;
        }

        if(idx2 < length2)
        {
            sum2 += (secondWord.charCodeAt(idx2) - 97).toString();
            idx2++;
        }

        if(idx3 < length3)
        {
            sum3 += (targetWord.charCodeAt(idx3) - 97).toString();
            idx3++;
        }

        if(idx1 >= length1 && idx2 >= length2 && idx3 >= length3) break;
    }

    if(evalBase10(sum1) + evalBase10(sum2) == evalBase10(sum3)) return true;
    return false;
}

console.log(checkEqualSummation(firstWord1, secondWord1, targetWord1));
console.log(checkEqualSummation(firstWord2, secondWord2, targetWord2));
console.log(checkEqualSummation(firstWord3, secondWord3, targetWord3));
