# 1331: Rank transform of an array
# Tested successfully

arr1 = [40, 10, 20 ,30]
arr2 = [100, 100, 100]
arr3 = [37, 12, 28, 9, 100, 56, 80, 5, 12]


def rankTransform(arr):
    sortedArr = sorted(arr)
    dict = {}
    res = []
    rank = 1
    for i in range(len(sortedArr)-1):
        if sortedArr[i] != sortedArr[i+1]:
            dict[sortedArr[i]] = rank
            rank += 1
    if sortedArr[-1] != sortedArr[-2]:
        dict[sortedArr[-1]] = rank

    if len(dict.items()) == 0:
        return [1]*len(arr)

    for a in arr:
        res.append(dict[a])
    
    return res

print(rankTransform(arr1))
print(rankTransform(arr2))
print(rankTransform(arr3))