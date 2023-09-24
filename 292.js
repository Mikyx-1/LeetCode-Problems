// 292: Nim Game
// Tested successfully

let n1 = 4, n2 = 1, n3 = 2;



function winLose(numStones)
{
    if(numStones<4) return false;
    
    if(numStones == 4) return true;

    return false;
}

function nimGame(numStones)
{
    // Player1
    if (numStones < 4) return true;
    
    for ( let i = 1; i < 4; i++)
    {
        if(winLose(numStones-i)) return true;
    }

    numStones = numStones -  3;

    // Player2
    if(numStones < 4) return false;

    for (let i = 1; i < 4; i++)
    {
        if(winLose(numStones-i)) return false;
    }

    

    numStones = numStones - 3;

    return nimGame(numStones);
}

// console.log(nimGame(n1));
// console.log(nimGame(n2));
// console.log(nimGame(n3));

// console.log(nimGame(9));
for (let i = 1; i < 20; i ++)
{
    console.log(i + ' : ' + nimGame(i));
}