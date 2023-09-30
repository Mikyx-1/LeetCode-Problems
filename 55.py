# 55: Jump Game
# Tested Successfully

def jumpGame(nums):
    def canWin(start_idx, nums):
        if(start_idx >= len(nums)):
            return True
        
        if(nums[start_idx] == 0):
            return False
        
        win = any([canWin(start_idx + i, nums) for i in range(1, nums[start_idx]+1)])

        return win
    
    return canWin(0, nums)

nums1 = [2, 3, 1, 1, 4]
nums2 = [3, 2, 1, 0, 4]

print(jumpGame(nums1))
print(jumpGame(nums2))