// 1518. Water Bottles
// Tested successfully

// O(n)

let numBottles1 = 9, numExchange1 = 3;
let numBottles2 = 15, numExchange2 = 4;

function waterBottles(numBottles, numExchange)
{
    let numDrank = numBottles;
    let numFull = 0;
    let numEmpty = numBottles;

    while(numEmpty >= numExchange)
    {
        numFull = Math.floor(numEmpty/numExchange);
        numEmpty = numFull + numEmpty%numExchange;
        numDrank = numDrank + numFull;
    }

    return numDrank;
}

console.log(waterBottles(numBottles1, numExchange1));
console.log(waterBottles(numBottles2, numExchange2));