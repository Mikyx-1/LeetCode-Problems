# 169: Majority Element
# Tested successfully


# Boyer-Moore algorithm

nums1 = [3, 2, 3]
nums2 = [2, 2, 1, 1, 1, 2, 2]

def returnMajorityElement(nums):
    ans = None
    count = 0
    for num in nums:
        if count == 0:
            ans = num
        count += (1 if num == ans else -1)

    return ans


print(returnMajorityElement(nums1))
print(returnMajorityElement(nums2))
