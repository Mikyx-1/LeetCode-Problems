# 441: Arrangeing Coins
# Tested successfully

n1 = 5
n2 = 8

def arrangingCoins(n):

    inStore = 0

    for i in range(n):
        inStore += i
        if inStore > n:
            return i
            
print(arrangingCoins(n1))
print(arrangingCoins(n2))
