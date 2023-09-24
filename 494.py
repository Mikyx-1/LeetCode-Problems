# 494: Target Sum
# Tested successfully

nums1 = [1, 1, 1, 1, 1]
target1 = 3

nums2 = [1]
target2 = 1

def findTargetSumWays(nums, target):
    dp = {}

    def backtrack(i, total):
        if i == len(nums):
            return 1 if total == target else 0
        
        if((i, total) in dp):
            return dp[(i, total)]
        
        dp[(i, total)] = (backtrack(i+1, total + nums[i]) + backtrack(i+1, total - nums[i]))

        return dp[(i, total)]
    
    backtrack(0, 0)
    return dp

print(findTargetSumWays(nums1, target1))
# print(findTargetSumWays(nums2, target2))