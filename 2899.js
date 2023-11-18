// 2899. Last Visited Integers
// Tested successfully

let words1 = ["1","2","prev","prev","prev"], words2 = ["1","prev","2","prev","prev"];


function lastVisitedIntegers(words)
{
    let ans = [];
    let history = [];
    let ptr = 0;
    for (word of words)
    {
        if(word != "prev") 
        {
            ptr = 0;
            history.splice(0, 0, word);
        }
        else{
            if(ptr < history.length) ans.push(parseInt(history[ptr]));
            else ans.push(-1)
            ptr++;         
        }
    }
    return ans;
}

console.log(lastVisitedIntegers(words1));
console.log(lastVisitedIntegers(words2));
