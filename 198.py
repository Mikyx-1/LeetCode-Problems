# 198: House Robber
# Tested successfully



nums1 = [1, 2, 3, 1]
nums2 = [2, 7, 9, 3, 1]

def maxRobbingAmount(nums):
    arr = [nums[0], nums[1]]
    for i in range(2, len(nums)):
        arr +=  [max(arr[i-2] + nums[i], arr[i-1])]

    return arr


print(maxRobbingAmount(nums1))