# 322: Coin Change

coins1 = [1, 2, 5]
amount1 = 11

coins2 = [2]
amount2 = 3

coins3 = [1]
amount3 = 0

def coinChange(coins, amount):
    dp = [0] + [amount+1]*amount

    for coin in coins:
        for i in range(coin, amount + 1):
            dp[i] = min(dp[i], dp[i-coin] + 1)

    return -1 if dp[amount] == amount + 1 else dp[amount]

print(coinChange(coins1, amount1))
print(coinChange(coins2, amount2))
print(coinChange(coins3, amount3))
