# 867: Transpose Matrix
# Tested successfull

matrix1 = [[1,2,3],[4,5,6],[7,8,9]]
matrix2 = [[1,2,3],[4,5,6]]

def transposeMatrix(matrix):
    transposedMatrix = []
    numRows = len(matrix)
    numCols = len(matrix[0])
    for col in range(numCols):
        transposedMatrix.append([])
        for row in range(numRows):
            transposedMatrix[-1].append(matrix[row][col])
    return transposedMatrix

print(transposeMatrix(matrix1))
print(transposeMatrix(matrix2))