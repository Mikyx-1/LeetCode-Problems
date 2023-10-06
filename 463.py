# 463: Island Perimeter
# Tested successfully

grid1 = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
grid2 = [[1]]
grid3 = [[1, 0]]

def calculatePerimeter(grid):
    numRows = len(grid)
    numCols = len(grid[0])
    perimeter = 0
    for i in range(numRows):
        for j in range(numCols):
            if grid[i][j] == 1:
                perimeter +=4
                if i-1 >= 0 and grid[i-1][j] == 1:
                    perimeter -= 1
                if i + 1 < numRows and grid[i+1][j] == 1:
                    perimeter -= 1

                if j-1 >= 0 and grid[i][j-1] == 1:
                    perimeter -=1

                if j+1 < numCols and grid[i][j+1] == 1:
                    perimeter -=1

    return perimeter

print(calculatePerimeter(grid1))
print(calculatePerimeter(grid2))
print(calculatePerimeter(grid3))
