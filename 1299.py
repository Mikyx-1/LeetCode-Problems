# 1299: Replace Elements with Greatest element on right side
# Tested successfully

arr1 = [17, 18, 5, 4, 6, 1]
arr2 = [400]

def replaceWithGreatestRight(arr):
    if len(arr) == 1: return [-1]

    for i in range(len(arr)-1):
        arr[i] = max(arr[i+1:])
    arr[-1] = -1
    return arr

print(replaceWithGreatestRight(arr1))
print(replaceWithGreatestRight(arr2))