# 1232: Check if it is a straight line
# Tested successfully

coordinates1 = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
coordinates2 = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]

def checkLine(coordinates):
    residualX = coordinates[1][0] - coordinates[0][0]
    residualY = coordinates[1][1] - coordinates[0][1]
    for i in range(2, len(coordinates)-1):
        if coordinates[i+1][0] - coordinates[i][0] != residualX or \
            coordinates[i+1][1] - coordinates[i][1] != residualY:
            return False
    return True

print(checkLine(coordinates1))

print(checkLine(coordinates2))
