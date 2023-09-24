
arr1 = [5, 3, 4]
target1 = 6

def canSum(arr, target):

    res = []
    for item in arr:
        if(target - item == 0):
            return True
        if(target - item > 0):
            res.append(target-item)
        else:
            res.append(False)

    if(all(res) == False):
        return False
    
    return any([canSum(arr, res[i]) for i in range(len(res))])


print(canSum(arr1, target1))
