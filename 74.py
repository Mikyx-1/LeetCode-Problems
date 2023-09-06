# 74: Search a 2D Matrix
# Tested successfully


import random
matrix1 = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
target1 = 3

target2 = 13

def binarySearch(arr, target, start_idx, end_idx):

    if(end_idx - start_idx + 1 < 3): 
        for i in range(start_idx, end_idx+1):
            if(arr[i] == target):
                return i
        return -1 
    
    
    middle_position = start_idx + (end_idx - start_idx)//2 + 1
    middle_value = arr[middle_position]
    if(target == middle_value):
        return middle_position
    elif (target < middle_value):
        return binarySearch(arr, target, 0, middle_position-1)
    else:
        return binarySearch(arr, target, middle_position, end_idx)

    
def join_matrix(matrix):
    if len(matrix) == 1:
        return matrix[0]
    return matrix[0] + join_matrix(matrix[1:])


def matrixSearch(matrix, target):
    matrix = join_matrix(matrix)
    idx = binarySearch(matrix, target, 0, len(matrix)-1)
    if idx != -1:
        return True
    return False

print(matrixSearch(matrix1, target2))