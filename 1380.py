# 1380: Lucky Numbers in a Matrix
# Tested successfully

matrix1 = [[3,7,8],[9,11,13],[15,16,17]]
matrix2 = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
matrix3 = [[7,8],[1,2]]


def luckyNumbersInAMatrix(matrix):
    numRows = len(matrix)
    numCols = len(matrix[0])
    candidates = []
    for i in range(numRows):
        minValue = matrix[i][0]
        minPos = 0
        for j in range(1, numCols):
            if matrix[i][j] < minValue:
                minValue = matrix[i][j]
                minPos = j
        candidates.append((i, minPos))

    visitedList = []
    ans = []
    for candidate in candidates:
        if candidate[1] not in visitedList:
            col = candidate[1]
            value = matrix[candidate[0]][candidate[1]]
            break_flag = False
            for row in range(numRows):
                if matrix[row][col] > value:
                    break_flag = True
                    break

            if break_flag == False:
                ans.append(value)
                visitedList.append(col)
    return ans

print(luckyNumbersInAMatrix(matrix1))
print(luckyNumbersInAMatrix(matrix2))
print(luckyNumbersInAMatrix(matrix3))