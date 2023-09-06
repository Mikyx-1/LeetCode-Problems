# 1911. Maximum alternating subsequence sum
# Solved, but dont understand why ?


nums1 = [4, 2, 5, 3]
nums2 = [5, 6, 7, 8]
nums3 = [6, 2, 1, 2, 4, 5]

def maxAlternatingSum(nums):
    even = 0
    odd = 0

    for num in nums:
        even = max(even, odd + num)             # Why max ?
        odd = even - num                        # Why odd = even - num ?
    return even


print(maxAlternatingSum(nums3))