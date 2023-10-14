# 39: Combination Sum

import time

candidates1 = [2, 3, 6, 7]
target1 = 10

candidates2 = [2, 3, 5]
target2 = 8

candidates3 = [2]
target3 = 1


def combinationSum(candidates, target):
    dp = [[] for _ in range(target + 1)]
    dp[0] = [[]]  # Base case: empty combination for target = 0

    for num in candidates:
        for i in range(num, target + 1):
            for comb in dp[i - num]:
                dp[i].append(comb + [num])

    return dp[target]

start_time = time.time()

print(combinationSum(candidates1, target1))
# print(combinationSum(candidates2, target2))
# print(combinationSum(candidates3, target3))

print(time.time() - start_time)