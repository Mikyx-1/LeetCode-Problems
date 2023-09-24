# 152: Maximum Product Subarray
# Tested successfully

nums1 = [2, 3, -2, 4]
nums2 = [-2, 0, -1]
nums3 = [1, 7, 4, -9, -5]

def maximumProductSubarray(nums):
    maxValue = nums[0]
    buffer = [nums[0]]
    def maximumProductSubarray1(nums):
        nonlocal maxValue, buffer
        if(len(nums) == 1):
            
            if(nums[0]*buffer[-1] > maxValue):
                maxValue = nums[0]*buffer[-1]
            return 
            
        lastValueCache = buffer[-1]
        buffer.append(nums[0]*lastValueCache)
        if(buffer[-1] > maxValue):
            maxValue = buffer[-1]

        return maximumProductSubarray1(nums[1:])
    
    maximumProductSubarray1(nums[1:])
    return maxValue

print(maximumProductSubarray(nums1))
print(maximumProductSubarray(nums2))
print(maximumProductSubarray(nums3))


