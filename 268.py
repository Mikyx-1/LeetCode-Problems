# 268: Missing Number
# Tested successfully

nums1 = [3, 0, 1]
nums2 = [0, 1, 2, 3, 4]
nums3 = [9, 6, 4, 2, 3, 5, 7, 0, 1]

def missingNumber(nums):
    sorted_nums = sorted(nums)
    if sorted_nums[-1] < len(sorted_nums):
        return sorted_nums[-1] + 1
    for i in range(len(sorted_nums)-1):
        if sorted_nums[i+1] != sorted_nums[i] + 1:
            return sorted_nums[i] + 1

    return 


print(missingNumber(nums2))