# 766: Toeplitz Matrix
# Tested successfully

# Bad coded

matrix1 = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
matrix2 = [[1,2],[2,2]]
matrix3 = [[1, 2, 3], [2, 1, 2], [1, 2, 1]]

def checkToeplitzMatrix(matrix):

    numRows = len(matrix)
    numCols = len(matrix[0])
    startPosX = numRows-1
    startPosY = 0

    def check(startPosX, startPosY):
        if (startPosX == 0 and startPosY == numCols-1):
            return True
        

        for i in range(numRows - startPosX-1):
            if startPosY+i+1 >= numCols or startPosX + i + 1 >= numRows:
                break
            if(matrix[startPosX+i][startPosY+i] != matrix[startPosX+ i +1][startPosY+i+1]):
                return False
        

        if startPosX > 0 and startPosY == 0:
            return check(startPosX-1, startPosY)
        elif startPosX == 0 and startPosY == 0:
            return check(startPosX, startPosY+1)
        
        elif startPosX == 0 and startPosY > 0:
            return check(startPosX, startPosY+1)
    return check(numRows-2, 0)

print(checkToeplitzMatrix(matrix1))
print(checkToeplitzMatrix(matrix2))
print(checkToeplitzMatrix(matrix3))