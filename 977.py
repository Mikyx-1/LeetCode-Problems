# 977: Squares of a Sorted Array
# Tested successfully

nums1 = [-4, -1, 0, 3, 10]
nums2 = [-7, -3, 2, 3, 11]

def squaresOfASortedArray(nums):
    if(len(nums) == 0): return False


    ptr_left = 0
    ptr_right = len(nums)-1
    result = []
    while(ptr_left <= ptr_right):
        if(abs(nums[ptr_left]) <= abs(nums[ptr_right])):
            result.insert(0, nums[ptr_right]**2)
            ptr_right-=1

        else:
            result.insert(0, nums[ptr_left]**2)
            ptr_left +=1

    return result

print(squaresOfASortedArray(nums1))
print(squaresOfASortedArray(nums2))