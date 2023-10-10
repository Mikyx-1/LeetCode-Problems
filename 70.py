# 70: climbing stairs
# Tested successfully

n1 = 2
n2 = 3

def climbingStairs(n):
    cache = [1, 2]

    def numSteps(ith_stair):
        if ith_stair == n:
            return cache[-1] + cache[-2]
        
        cache.append(cache[ith_stair-1] + cache[ith_stair-2])
        return numSteps(ith_stair+1)
    if n > 2:
        numSteps(2)
    return cache[-1]


print(climbingStairs(n1))
print(climbingStairs(4))
