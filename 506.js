// 506. Relative Ranks
// Tested successfully

let score1 = [5, 4, 3, 2, 1];
let score2 = [10, 3, 8, 9, 4];


function copyArr(arr){
    let newArr = [];
    for (item of arr) newArr.push(item);
    return newArr;
}

function relativeRanks(score)
{
    let sorted_score = [...score];
    sorted_score.sort((a, b) => b-a);
    let finalPos = score.length;
    let result = [];
    for (s of score)
    {   let idx = sorted_score.indexOf(s);
        if(idx == 0) result.push("Gold Medal");
        else if (idx == 1) result.push("Silver Medal");
        else if (idx == 2) result.push("Bronze Medal");
        
        else result.push((idx+1).toString() + "th")
    }

    

    return result;
}

console.log(relativeRanks(score1));
console.log(relativeRanks(score2));