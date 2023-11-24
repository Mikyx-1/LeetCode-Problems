// 2806. Account Balance after Rounded Purchase
// Tested successfully

let purchaseAmount1 = 9, purchaseAmount2 = 15;

function accountBalanceAfterRoundedPurchase(purchaseAmount)
{
    if(purchaseAmount%10 > 5) purchaseAmount += (10 - purchaseAmount%10);
    else purchaseAmount += (10 + purchaseAmount%10);
    return 100 - purchaseAmount;
}

console.log(accountBalanceAfterRoundedPurchase(purchaseAmount1));
console.log(accountBalanceAfterRoundedPurchase(purchaseAmount2));
