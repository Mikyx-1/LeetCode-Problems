// 2660: Determine the Winner of a Bowling Game


let ex1 = {'player1': [4, 10, 7, 9], 'player2': [6, 5, 2, 3]};
let ex2 = {'player1': [3, 5, 7, 6], 'player2': [8, 10, 10, 2]};
let ex3 = {'player1': [2, 3], 'player2': [4, 1]};

function decideWinner(player1, player2){

    let player1_score = 0;

    let player2_score = 0;

    for (let i = 0; i < 4; i++)
    {
        if(player1[i-2] == 10 || player1[i-1]==10) 
        {
            player1_score += 2*player1[i];
        }
        else{
            player1_score += player1[i]
        }

        if (player2[i-2] == 10 || player2[i-1]==10)
        {
            player2_score += 2*player2[i];
        }
        else{
            player2_score += player2[i];
        }

    }

    if (player1_score > player2_score) return 1;
    else if (player1_score < player2_score) return 2;
    return 0;
}

console.log(decideWinner(ex1['player1'], ex1['player2']));
console.log(decideWinner(ex2['player1'], ex2['player2']));
console.log(decideWinner(ex3['player1'], ex3['player2']));