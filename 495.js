// 495. Teemo Attacking
// Tested successfully

let timeSeries1 = [1, 4], duration1 = 2;
let timeSeries2 = [1, 2], duration2 = 2;

function teemoAttacking(timeSeries, duration)
{
    let result = new Set();
    for (let timeSerie of timeSeries)
    {
        for (timestep = 0; timestep<duration; timestep++)
        {
            result.add(timeSerie + timestep);
        }
    }

    return result.size;
}

console.log(teemoAttacking(timeSeries1, duration1));
console.log(teemoAttacking(timeSeries2, duration2));