// 1688. Count of Matches in tournament
// Tested successfully

let n1 =7, n2 = 14;

function countOfMatchesInTournament(n)
{
    let totalMatches = 0;
    let numTeams = n;
    while(numTeams > 1)
    {
        totalMatches += Math.floor(numTeams/2);
        numTeams = Math.floor(numTeams/2) + numTeams%2;
    }
    return totalMatches;
}

console.log(countOfMatchesInTournament(n1));
console.log(countOfMatchesInTournament(n2));