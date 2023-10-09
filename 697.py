# 697: Degree of an array
# Tested successfully


nums1 = [1, 2, 2, 3, 1]
nums2 = [1, 2, 2, 3, 1, 4, 2]

def degreeOfAnArr(nums):
    hashMap = {}
    for ith, num in enumerate(nums):
        if num not in hashMap:
            hashMap[num] =[1, ith, ith]

        else:
            hashMap[num][0] += 1
            hashMap[num][-1] = ith

    closestDist = float("inf")
    mostFrequentKey = -1
    for key in hashMap.keys():
        if hashMap[key][0] == mostFrequentKey:
            if hashMap[key][-1] - hashMap[key][-2] + 1 < closestDist:
                closestDist = hashMap[key][-1] - hashMap[key][-2] + 1

        if hashMap[key][0] > mostFrequentKey:
            mostFrequentKey = hashMap[key][0]
            closestDist = hashMap[key][-1] - hashMap[key][-2] + 1

        

    return closestDist


print(degreeOfAnArr(nums1))
print(degreeOfAnArr(nums2))