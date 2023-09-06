# 48: Rotate Image
# Tested sucessfully

image1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

image2 = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]

def transpose(image):
    num_rows = len(image)
    num_cols = len(image[0])
    for i in range(num_rows):
        for j in range(i, num_cols):
            if(i!=j):
                buffer = image[i][j]
                image[i][j] = image[j][i]
                image[j][i] = buffer

    return image

def flip_horizontally(image):
    num_rows = len(image)
    num_cols = len(image[0])
    for i in range(num_cols//2):
        for j in range(num_rows):
            buffer = image[j][i]
            image[j][i] = image[j][num_cols-1-i]
            image[j][num_cols-1-i] = buffer 
    return image


def rotateImage(image):
    return flip_horizontally(transpose(image))


print(rotateImage(image1))