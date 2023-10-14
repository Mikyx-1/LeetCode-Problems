# 832: Flipping an Image
# Tested successfully

image1 = [[1, 1, 0], [1, 0, 1], [0, 0, 0]]
image2 = [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]

def flipImage(image):
    for i in range(len(image)):
        rowLength = len(image[i])
        middleIdx = rowLength//2
        for j in range(middleIdx):
            cache = image[i][j]
            image[i][j] = 1 - image[i][rowLength-j-1]
            image[i][rowLength-j-1] = 1 - cache
        if middleIdx%2 != 0:
            image[i][middleIdx] = 1 - image[i][middleIdx]

    return image

print(flipImage(image1))
print(flipImage(image2))
