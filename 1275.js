// 1275. Find Winner on a Tic Tac Toe Game
// Tested successfully

let moves1 = [[0,0],[2,0],[1,1],[2,1],[2,2]];
let moves2 = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]];
let moves3 = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]];


function checkWin(move1, move2, move3)
{
    if(move1[0] - move2[0] !=0)
    {
        a = (move1[1] - move2[1])/(move1[0] - move2[0]);
        b = move1[1] - a*move1[0];
        if(a*move3[0] + b == move3[1]) return true;
        return false;
    }
    else{
        if (move3[0] == move2[0]) return true;
        return false;
    }
}

function findWinner(moves)
{
    let player1Moves = [];
    let player2Moves = [];

    for (let i = 0; i < moves.length; i++)
    {
        if (i%2==0) player1Moves.push(moves[i]);
        else player2Moves.push(moves[i]);
    }

    if (player1Moves.length==3)
    {
        if(checkWin(player1Moves[0], player1Moves[1], player1Moves[2])) return "A";
    }

    for (let i = 0; i < player1Moves.length-3; i++)
    {
        for (let j = i+1; j < player1Moves.length-2; j++)
        {
            if(checkWin(player1Moves[i], player1Moves[j], player1Moves[j+1])) return "A";
        }
    }

    if(player2Moves.length == 3){
        if(checkWin(player2Moves[0], player2Moves[1], player2Moves[2])) return "B";
    }

    for (let i = 0; i < player2Moves.length-3; i++)
    {
        for (let j = i+1; j < player2Moves.length-2; j++)
        {
            if(checkWin(player2Moves[i], player2Moves[j], player2Moves[j+1])) return "B";
        }
    }
    return "Draw";
}

console.log(findWinner(moves1));
console.log(findWinner(moves2));
console.log(findWinner(moves3));