# 456: 132 Pattern
# Tested successfully


nums1 = [1, 2, 3, 4]
nums2 = [3, 1, 4, 2]
nums3 = [-1, 3, 2, 0]

def check132Pattern(nums):
    if(len(nums) < 3): return False
    if (len(nums) == 3):
        if nums[0] < nums[1] and nums[1] > nums[2]:
            return True
        return False

    check1Arr = []

    for i in range(1, len(nums)):
        if nums[i] > nums[0]:
            check1Arr.append((nums[i], i))
        for check1 in check1Arr:
            if nums[i] < check1[0] and i > check1[1]:
                return True
    
    # for i in range(2, len(nums)):
    #     for check1 in check1Arr:
    #         if nums[i] < check1[0] and i > check1[1]:
    #             return True
    return check132Pattern(nums[1:])

print(check132Pattern(nums1))
print(check132Pattern(nums2))
print(check132Pattern(nums3))
