# 746: Min Cost Climbing Stairs
# Tested successfully

cost1 = [10, 15, 20]
cost2 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]

def solve(cost):

    cost = cost + [0]
    n = len(cost) - 1
    def minimumCost(cost, n):
        if n == 0:
            return cost[0]
        if n == 1:
            return cost[1]
        
        return min(minimumCost(cost, n-1) + cost[n], minimumCost(cost, n-2) + cost[n])

    return minimumCost(cost, n)

print(solve(cost1))
print(solve(cost2))