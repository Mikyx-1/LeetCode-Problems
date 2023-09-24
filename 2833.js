// 2833: Furthest Point From Origin
// Tested Successfully

// Algorithm: 
// Step 1: Find the numbers of R and L and figure out which one larger
// Step 2: Fill all the _ with that Max
// Step 3: Determine the max length


let moves1 = 'L_RL__R';
let moves2 = '_R__LL_';
let moves3 = '_______';

function furthestPointFromOrigin(moves)
{
    let numL = 0;
    let numR = 0;
    for (move of moves)
    {
        if(move=="L") numL++;
        else if(move=="R") numR++;
    }
    
    let OptimumDirection = "L";
    if (numR > numL) OptimumDirection = 'R';

    let res = 0;
    for (move of moves)
    {
        if (move==OptimumDirection || move=='_') res++;
        else res--;
    }

    return res;
}

console.log(furthestPointFromOrigin(moves1));
console.log(furthestPointFromOrigin(moves2));
console.log(furthestPointFromOrigin(moves3));