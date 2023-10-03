# 461: Hamming distance
# Tested successfully

def toBin(x, res):
    if(x//2==0):
        return  [x%2] + res
 
    res = [x%2] + res
    return toBin(x//2, res)


def calculateHammingDist(x, y):
    xB = toBin(x, [])
    yB = toBin(y, [])
    res = 0
    maxLength = max(len(xB), len(yB))
    xB = [0]*(maxLength-len(xB)) + xB
    yB = [0]*(maxLength - len(yB)) + yB
    for i in range(maxLength):
        res += abs(xB[i] - yB[i])

    return res


print(calculateHammingDist(15, 0))