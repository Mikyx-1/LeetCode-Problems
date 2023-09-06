# 73: Set Matrix Zeroes
# Tested successfully

matrix1 = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
matrix2 = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]

def setColRowZero(matrix, x, y, transformed_positions):

    transformed_positions.append((x, y))

    num_rows = len(matrix)
    num_cols = len(matrix[0])
    
    for i in range(num_cols):
        if (matrix[x][i] != 0):
            matrix[x][i] = 0
            transformed_positions.append((x, i))

    for i in range(num_rows):
        if matrix[i][y] != 0:
            matrix[i][y] = 0
            transformed_positions.append((i, y))

    return matrix, transformed_positions



def checkRepeat(i, j, transformed_positions):
    for t in transformed_positions:
        if i == t[0] and j == t[1]:
            return True
    return False


def setMatrixZeros(matrix):
    transformed_positions = []
    for i in range(len(matrix)):
        for j in range(len(matrix[0])):
            if matrix[i][j] == 0 and checkRepeat(i, j, transformed_positions)==False:
                matrix, transformed_positions = setColRowZero(matrix, i, j, transformed_positions)
    return matrix



print(setMatrixZeros(matrix2))