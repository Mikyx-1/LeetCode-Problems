// 1217. Minimum cost to move chips to the same position
// Tested successfuly


function solution(chips)
{
    let count = [0, 0];
    for (let chip of chips)
    {
        count[chip%2]++;
    }

    if(count[0] <= count[1]) return count[0];
    else return count[1];
}

console.log(solution([1, 2, 3]));