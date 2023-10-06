# 704: Binary Search
# Tested successfully

nums1 = [-1, 0, 3, 5, 9, 12, 13, 14, 15, 109]
target1 = 9
target2 = 2


def binSearch(sortedArr, startIdx, endIdx, target):

    if (endIdx - startIdx + 1 <= 2):
        for i in range(startIdx, endIdx+1):
            if sortedArr[i] == target:
                return i
            
        return -1

    
    middleIdx = (endIdx + startIdx)//2

    if(sortedArr[middleIdx] == target):
        return middleIdx
  
    return max(binSearch(sortedArr, startIdx, middleIdx-1, target), binSearch(sortedArr, middleIdx+1, endIdx, target))


print(binSearch(nums1, 0, len(nums1)-1, 109))