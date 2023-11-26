// 1716. Calculate Money In Leetcode Bank
// Tested successfully

let n1 = 4, n2 = 10, n3 = 20;


function calculateMoneyInAWeek(startDollar)
{
    return (2*startDollar+6)*3 + startDollar+3;
}

function calculateMoneyInLeetcodeBank(n)
{
    let numWeeks = Math.floor(n/7);
    let residualDays = n%7;
    let startMoney = 1;
    let totalMoney = 0;
    for (let i = 0; i < numWeeks; i++) {
        totalMoney += calculateMoneyInAWeek(startMoney);
        startMoney++;
    }
    for (let i = 0; i < residualDays; i++)
    {
        totalMoney += startMoney;
        startMoney++;
    }
    return totalMoney;
}

console.log(calculateMoneyInLeetcodeBank(n1));
console.log(calculateMoneyInLeetcodeBank(n2));
console.log(calculateMoneyInLeetcodeBank(n3));
