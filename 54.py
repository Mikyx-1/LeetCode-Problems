# Spiral Matrix
# Tested but chatGPT but not reviewed by me
matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
matrix2 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]



def extract_spiral(matrix):
    top = 0
    bottom = len(matrix) - 1
    left = 0
    right = len(matrix[0]) - 1
    result = []

    while top <= bottom and left <= right:
        # Traverse top row
        for i in range(left, right + 1):
            result.append(matrix[top][i])
        top += 1

        # Traverse rightmost column
        for i in range(top, bottom + 1):
            result.append(matrix[i][right])
        right -= 1

        # Traverse bottom row
        if top <= bottom:
            for i in range(right, left - 1, -1):
                result.append(matrix[bottom][i])
            bottom -= 1

        # Traverse leftmost column
        if left <= right:
            for i in range(bottom, top - 1, -1):
                result.append(matrix[i][left])
            left += 1

    return result

            

print(extract_spiral(matrix2))