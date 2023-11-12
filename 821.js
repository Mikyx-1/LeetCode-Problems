// 821. Shortest Distance to a Character
// Tested successfully

let s1 = "loveleetcode", c1 = "e";
let s2 = "aaab", c2 = "b";

function shortestDistanceToACharacter(string, c)
{   
    let stations = [];
    let result = [];
    for (let i = 0; i < string.length; i++)
    {
        if(string[i] == c) stations.push(i);
    }

    for (let i = 0; i < string.length; i++)
    {
        let minDist = Infinity;
        for (station of stations)
        {
            if(Math.abs(i - station) < minDist) minDist = Math.abs(i-station);
        }
        result.push(minDist);
    }

    return result;
}

console.log(shortestDistanceToACharacter(s1, c1));
console.log(shortestDistanceToACharacter(s2, c2));