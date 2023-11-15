// 2011. Final Value of Variable After Performing Operations
// Tested successfully

let operations1 = ["--X","X++","X++"], operations2 = ["++X","++X","X++"], operations3 = ["X++","++X","--X","X--"];


function finalValue(operations)
{
    let currVal = 0;
    for (operation of operations)
    {
        if(operation[0] == "-" || operation[2] == "-") currVal--;
        else currVal++;
    }
    return currVal;
}

console.log(finalValue(operations1));
console.log(finalValue(operations2));
console.log(finalValue(operations3));