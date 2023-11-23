// 2335. Minimum Amount Of Time to Fill Cups
// Tested successfully

let amount1 = [1, 4, 2], amount2 = [5, 4, 4], amount3 = [5, 0, 0];

function chooseMinIndex(amount)
{
    if(amount[0] <= amount[1] && amount[0] <= amount[2]) return [1, 2];
    else if (amount[1] <= amount[0] && amount[1] <= amount[2]) return [0, 2];
    return [0, 1];
}

function minimumAmountOfTimeToFillCups(amount)
{
    let step_cnt = 0;
    let queue = [0, 1];
    let i = 1;
    while(true)
    {
        if(amount.reduce((a, b) => {return a + b}) <= 0) break;

        let [maxIdx1, maxIdx2] = chooseMinIndex(amount);
        if(amount[maxIdx1] - 1 >= 0) amount[maxIdx1]--;
        if(amount[maxIdx2] - 1 >= 0) amount[maxIdx2]--;
        step_cnt++;
    }
    return step_cnt;
}

console.log(minimumAmountOfTimeToFillCups(amount1));
console.log(minimumAmountOfTimeToFillCups(amount2));
console.log(minimumAmountOfTimeToFillCups(amount3));
