# 45: Jump Game II
# Tested successfully

def jumpGameII(nums):
    minsteps = len(nums) 

    def canWin(start_idx, nums, num_step):
        nonlocal minsteps
        if(start_idx >= len(nums)):
            if num_step < minsteps:
                minsteps = num_step
            return
        
        if(nums[start_idx] == 0):
            return
        
        num_step+=1
        for i in range(1, nums[start_idx] + 1):
            canWin(start_idx + i, nums, num_step)

        
    canWin(0, nums, -1)
    return minsteps

nums1 = [2, 3, 1, 1, 4]
nums2 = [2, 3, 0, 1, 4]
nums3 = [1, 1, 1, 1, 1]

print(jumpGameII(nums1))
print(jumpGameII(nums2))
print(jumpGameII(nums3))