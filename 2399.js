// 2399. check Distances BEtween Same Letters
// Tested successfully

let s1 = "abaccb", distance1 = [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let s2 = "aa", distance2 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function checkDistancesBetweenSameLetters(s, distance)
{
    let dict = {};
    for (let i = 0; i < s.length; i++)
    {
        if(dict[s[i]] == null) dict[s[i]] = [i];
        else dict[s[i]].push(i);
    }

    for (key of Object.keys(dict))
    {
        let [start, end] = dict[key];
        keyCode = key.charCodeAt(0) - 97;
        if(distance[keyCode] != end - start - 1) return false;
    }
    return true;
}

console.log(checkDistancesBetweenSameLetters(s1, distance1));

console.log(checkDistancesBetweenSameLetters(s2, distance2));