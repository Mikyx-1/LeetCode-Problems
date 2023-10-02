# 414: 3rd Maximum Number
# Tested successfully

nums1 = [3, 2, 1]
nums2 = [1, 2]
nums3 = [2, 2, 3, 1]
nums4 = [1, 2, 3, 4, 5, 6, 7, 8, 9] # ans: 7, 8, 9
nums5 = [1, 1, 1, 4, 7, 2, 6, 3]        # ans: 7, 6, 4

def thirdMaximumNumber(nums):
    if(len(nums) < 3):
        return max(nums[0], nums[1])
    
    max1 = nums[0]
    max2 = nums[1]
    max3 = nums[2]
    for i in range(len(nums)):
        if(nums[i] > max1):
            max3 = max2
            max2 = max1
            max1 = nums[i]

        elif(nums[i] < max1 and nums[i] > max2):
            max3 = max2
            max2 = nums[i]

        elif(nums[i] < max2 and nums[i] > max3):
            max3 = nums[i]

        elif(nums[i] < max3 and max2 == max3):
            max3 = nums[i]

    return max3

print(thirdMaximumNumber(nums1))
print(thirdMaximumNumber(nums2))
print(thirdMaximumNumber(nums3))
print(thirdMaximumNumber(nums4))
print(thirdMaximumNumber(nums5))


