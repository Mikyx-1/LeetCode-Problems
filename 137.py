# 137: Single Number II
# Bit manipulation


nums1 = [2, 2, 3, 2]

nums2 = [0, 1, 0, 1, 0, 1, 99]


def singleNumberII(nums):
    ones = 0
    twos = 0

    for num in nums:
        ones ^= num & ~twos
        twos ^= num & ~ones

    return ones

print(singleNumberII(nums1))
print(singleNumberII(nums2))