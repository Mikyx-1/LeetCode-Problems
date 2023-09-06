# 11. Container with Most Water
# Tested successfully

height1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]
height2 = [1, 1]

def min(a, b):
    if a > b:
        return b
    return a


def maxArea(height):
    maxArea = min(height[0], height[1])
    for i in range(1, len(height)-1):
        for j in range(i+1, len(height)):
            currentArea = min(height[i], height[j])*(j-i)
            if currentArea > maxArea:
                maxArea = currentArea
    return maxArea

print(maxArea(height2))