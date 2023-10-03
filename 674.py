# 674: Longest Continuous Increasing Subsequence
# Tested successfully


nums1 = [1, 3, 5, 4, 7]
nums2 = [2, 2, 2, 2, 2]


def longestContinuousIncreasingSubsequence(nums):
    resultArr = [nums[0]]
    longestLength = 0
    for num in nums[1:]:
        if num > resultArr[-1]:
            resultArr.append(num)

        else:
            if(len(resultArr) > longestLength):
                longestLength = len(resultArr)
            resultArr = [num]

    return longestLength

print(longestContinuousIncreasingSubsequence(nums1))
print(longestContinuousIncreasingSubsequence(nums2))