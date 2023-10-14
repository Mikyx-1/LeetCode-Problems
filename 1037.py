# 1037: Valid Boomerange
# Tested successfully

points1 = [[1, 1], [2, 3], [3, 2]]
points2 = [[1, 1], [2, 2], [3, 3]]


def checkBoomerange(points):
    if len(points) < 2: return False

    a = (points[1][1] - points[0][1])/(points[1][0] - points[0][0])
    b = points[0][1] - a*points[0][0]

    for i in range(2, len(points)):
        if a*points[i][0] == points[i][1]:
            return False
    return True

print(checkBoomerange(points1))
print(checkBoomerange(points2))
