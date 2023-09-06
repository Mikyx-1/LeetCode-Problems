# 283: Move Zeros
# Tested Successfully

nums1 = [0, 1, 0, 3, 12]
nums2 = [0]

nums3  = [0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6]


def moveZeros(nums):
    if len(nums) == 1: return nums

    start_idx = 0
    end_idx = len(nums) - 1

    while end_idx > start_idx:
        if nums[start_idx] == 0:
            nums = nums[:start_idx] + nums[start_idx+1:] + [0]
            end_idx -= 1

        else:
            start_idx += 1

    return nums

print(moveZeros(nums3))
