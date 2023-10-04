# 485: Max consecutive ones
# Tested successfully

nums1 = [1, 1, 0, 1, 1, 1]
nums2 = [1, 0, 1, 1, 0, 1]

def maxConsecutiveOnes(nums):
    currentConsecutiveLength = 0
    maxConsecutiveLength = 0

    for i in range(len(nums)):
        if nums[i] == 1:
            currentConsecutiveLength+=1

        if nums[i] != 1 and currentConsecutiveLength != 0:
            if currentConsecutiveLength > maxConsecutiveLength:
                maxConsecutiveLength = currentConsecutiveLength
                currentConsecutiveLength = 0

    if currentConsecutiveLength > maxConsecutiveLength:
        return currentConsecutiveLength
    return maxConsecutiveLength

print(maxConsecutiveOnes(nums1))
print(maxConsecutiveOnes(nums2))