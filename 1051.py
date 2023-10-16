# 1051: Height checker


heights1 = [1, 1, 4, 2, 1, 3]
heights2 = [5, 1, 2 , 3, 4]
heights3 = [1, 2, 3, 4, 5]


def heightChecker(heights):
    sortedHeights = sorted(heights)
    cnt = 0
    for i in range(len(heights)):
        if heights[i] != sortedHeights[i]:
            cnt+=1
    return cnt 

print(heightChecker(heights1))
print(heightChecker(heights2))
print(heightChecker(heights3))