# 213: House Robber II
# Tested successfully

nums1 = [2, 3, 2]
nums2 = [1, 2, 3, 1]
nums3 = [1, 2, 3]
nums4 = [1, 4, 6, 100]

def houseRobberII(nums):
    
    length = len(nums)
    def solve(nums, idx, startIdx, firstTime):
        if idx == length -1:
            if startIdx == 0:
                return 0
            return nums[idx]
        
        if idx == length - 2:
            return nums[idx]

        if firstTime == True:
            firstTime = False
            return max(nums[idx] + solve(nums, idx+2, 0, firstTime), solve(nums, idx+1, 1, firstTime), solve(nums, idx+2, 2, firstTime))
        else:
            return max(nums[idx] + solve(nums, idx+2, 0, firstTime), solve(nums, idx+1, 1, firstTime), nums[idx] + solve(nums, idx+2, 2, firstTime))
    return solve(nums, 0, 0, True)

print(houseRobberII(nums1))
print(houseRobberII(nums2))
print(houseRobberII(nums3))
print(houseRobberII(nums4))