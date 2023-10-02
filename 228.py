# 228: Summary Ranges
# Tested successfully

nums1 = [0, 1, 2, 4, 5, 7]
nums2 = [0, 2, 3, 4, 6, 8, 9]


def summaryRanges(nums):
    start1 = nums[0]     # fixed
    start2 = nums[0]     # running
    result = []

    for i in range(1, len(nums)):

        if nums[i] - start2 == 1:
            start2 = nums[i]

        else:

            if(start2 - start1 == 0):
                result.append(str(start1))
            else:
                result.append(str(start1) + "->" + str(start2))

            start1 = nums[i]
            start2 = nums[i]

    if(start2-start1 == 0):
        result.append(nums[-1])
    else:
        result.append(str(start1) + "->" +  str(start2))
    return result
        
print(summaryRanges(nums1))
print(summaryRanges(nums2))