// 1046. Last Stone Weight
// Tested successfully

let stones1 = [2, 7, 4, 1, 8, 1];
let stones2 = [1];
let stones3 = [1, 1];



function findPositionsOf2MaxValues(stones)
{
    let max1 = null, pos1 = null, max2 = null, pos2 = null;
    if(stones[0]>= stones[1]){
        max1 = stones[0];
        pos1 = 0;
        max2 = stones[1];
        pos2 = 1;
    }
    else{
        max1 = stones[1];
        pos1 = 1;
        max2 = stones[0];
        pos2 = 0;
    }

    for (let i = 2; i < stones.length; i++)
    {
        if (stones[i] > max1){
            max2 = max1;
            pos2 = pos1;
            max1 = stones[i];
            pos1 = i;
        }
        else if (stones[i] <= max1 && stones[i] > max2) {
            max2 = stones[i];
            pos2 = i;
        }
    }

    return [max1, pos1, max2, pos2]
}


function lastStonesWeight(stones)
{
    if (stones.length <=1) return stones;

    let [max1, pos1, max2, pos2] = findPositionsOf2MaxValues(stones);
    
    stones[pos1] = max1-max2;
    stones.splice(pos2, 1);
    
    // return stones;
    return lastStonesWeight(stones);

}

console.log(lastStonesWeight(stones1));
console.log(lastStonesWeight(stones2));
console.log(lastStonesWeight(stones3));