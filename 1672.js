// 1672. Riches customer Wealth
// Tested successfully

let accounts1 = [[1,2,3],[3,2,1]];
let accounts2 = [[1,5],[7,3],[3,5]];
let accounts3 = [[2,8,7],[7,1,3],[1,9,5]];

function richestCustomerWealth(accounts)
{
    let maxWealth = -1;
    for (account of accounts)
    {
        let sum = account.reduce((a, b) => {return a + b});
        if(sum > maxWealth) maxWealth = sum;
    }
    return maxWealth;
}


console.log(richestCustomerWealth(accounts1));
console.log(richestCustomerWealth(accounts2));
console.log(richestCustomerWealth(accounts3));