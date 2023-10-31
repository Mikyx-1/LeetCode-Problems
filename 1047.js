// 1047. Remove all adjacent duplicates in string
// Tested successfully 

let s1 = "abbaca", s2 = "azxxzy";


function removeAllAdjacentDuplicates(string)
{
    
    let newString = string;
    let intactFlag = true;
    for (let i = 0; i < string.length-1; i++)
    {
        if (string[i] == string[i+1])
        {
            newString = string.slice(0, i) + string.slice(i+2, ); 
            intactFlag = false;
            break;
        }
    }
    if (intactFlag == true) return newString;

    else{
        return removeAllAdjacentDuplicates(newString);
    }
}

console.log(removeAllAdjacentDuplicates(s1));
console.log(removeAllAdjacentDuplicates(s2));

