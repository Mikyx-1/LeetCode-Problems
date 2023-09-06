# 75. Sort colors
# Bubble Sort algorithm
# Tested successfully
# Big O Notation: Nlog(n)

def bubbleSort(arr):
    
    finish_flag = False
    while finish_flag==False:
        finish_flag = True
        for i in range(len(arr)-1):
            if arr[i] > arr[i+1]:
                buffer = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = buffer
                finish_flag = False

    return arr


nums1 = [2, 0, 2, 1, 1, 0]
nums2 = [2, 0, 1]

print('Sorted colors: ', bubbleSort(nums1))
