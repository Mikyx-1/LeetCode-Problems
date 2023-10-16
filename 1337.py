# 1337: The K Weakest Rows in a Matrix
# Tested successfully

mat1 = [[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]]
k1 = 3

mat2 = [[1,0,0,0],
 [1,1,1,1],
 [1,0,0,0],
 [1,0,0,0]]
k2 = 2

def findKWeakest(mat, k, res = []):
    if k == len(res):
        return res

    for i in range(len(mat)):
        if i not in res:
            weakestIdx = i
            weakestRow = mat[i]

    for i in range(len(mat)):
        if sum(mat[i]) < sum(weakestRow) and i not in res:
            weakestRow = mat[i]
            weakestIdx = i

        if sum(mat[i]) == sum(weakestRow) and i < weakestIdx and i not in res:
            weakestIdx = i
            weakestRow = mat[i]
    
    res += [weakestIdx]
    return findKWeakest(mat, k, res)

print(findKWeakest(mat1, k1, []))
print(findKWeakest(mat2, k2, []))
