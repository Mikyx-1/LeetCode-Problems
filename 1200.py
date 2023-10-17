# 1200: Minimum absolute difference
# Tested successfully

arr1 = [4, 2, 1, 3]
arr2 = [1, 3, 6, 10, 15]
arr3 = [3, 8, -10, 23, 19, -4, -14, 27]

def minimumAbsoluteDifference(arr):
    sortedArr = sorted(arr)
    minimumArrays = [(sortedArr[0], sortedArr[1])]
    minimumDiff = abs(sortedArr[0] - sortedArr[1])

    for i in range(1, len(sortedArr)-1):
        if abs(sortedArr[i]-sortedArr[i+1]) == minimumDiff:
            minimumArrays.append((sortedArr[i], sortedArr[i+1]))

    return minimumArrays

print(minimumAbsoluteDifference(arr1))
print(minimumAbsoluteDifference(arr2))
print(minimumAbsoluteDifference(arr3))