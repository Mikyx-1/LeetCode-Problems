# 268: Missing Number
# Tested successfully
# O(n) time complexity

nums1 = [3, 0, 1]
nums2 = [0, 1, 2, 3, 4]
nums3 = [9, 6, 4, 2, 3, 5, 7, 0, 1]
nums4 = [0, 1]

def missingNumber(nums):
    minVal = nums[0]
    maxVal = nums[0]
    actualSum = 0
    for num in nums:
        if num < minVal:
            minVal = num
        if num > maxVal:
            maxVal = num
        
        actualSum += num

    length = maxVal - minVal + 1
    expectedSum = (maxVal + minVal)*(length//2)
    if length%2 != 0:
        expectedSum += (maxVal + minVal)//2

    if(expectedSum == actualSum): return maxVal+1
    else:
        return expectedSum - actualSum



print(missingNumber(nums1))
print(missingNumber(nums2))
print(missingNumber(nums3))
print(missingNumber(nums4))