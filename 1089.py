# 1089: Duplicate Zeros
# Tested successfully

arr1 = [1, 0, 2, 3, 0, 4, 5, 0]
arr2 = [1, 2, 3]
arr3 = [0]

def insert(arr, value, position):
    arr.append(arr[-1])
    
    for i in range(len(arr)- 2, position - 1, -1):
        arr[i+1] = arr[i]

    arr[position] = value
    return arr

def duplicateZeros(arr):
    idx = 0
    origLen = len(arr)
    while idx != len(arr)-1:
        if arr[idx] == 0:
            arr = insert(arr, 0, idx)
            idx+=2
        else:
            idx+=1

    return arr[:origLen]  

print(duplicateZeros(arr1))
print(duplicateZeros(arr2))
print(duplicateZeros(arr3))