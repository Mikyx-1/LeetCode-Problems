# 53: Maximum Subarray
# Tested successfully
# Algo: Dynamic Programming

nums1 = [-2,1,-3,4,-1,2,1,-5,4]
nums2 = [1]
nums3 = [5, 4, -1, 7, 8]


def maximumSubarray(nums):
    maxValue = nums[0]
    maxValueTracker = nums[0]
    for i in range(1, len(nums)):
        maxValue = max(nums[i], maxValue + nums[i])
        if maxValue > maxValueTracker:
            maxValueTracker = maxValue
    return maxValueTracker

print(maximumSubarray(nums1))
print(maximumSubarray(nums2))
print(maximumSubarray(nums3))
