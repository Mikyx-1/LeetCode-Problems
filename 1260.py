# 1260: Shift 2D grid
# Tested successfully

grid1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
k1 = 1

grid2 = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]]
k2 = 4

grid3 = [[1,2,3],[4,5,6],[7,8,9]]
k3 = 9

def shift2DGrid(grid, k):
    newGrid1 = []
    newGrid2 = []
    numRows = len(grid)
    numCols = len(grid[0])
    for g in grid:
        newGrid1 += g
    newGrid1 = newGrid1[-k:] +  newGrid1[:-k]
    for i in range(numRows):
        newGrid2 += [newGrid1[i*numCols: (i+1)*numCols]]
    
    return newGrid2

print(shift2DGrid(grid1, k1))
print(shift2DGrid(grid2, k2))
print(shift2DGrid(grid3, k3))