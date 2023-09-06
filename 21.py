# 21: Merge two sorted list
# Tested successfuly



list1 = [1, 2, 3, 5, 7, 9 , 15]
list2 = [4, 6, 8, 10, 12, 14, 16]

def mergeList(list1, list2):
    mergedList = []
    idx1 = 0
    idx2 = 0
    while(idx1 < len(list1) and idx2 < len(list2)):
        if(list1[idx1] < list2[idx2] and idx1 < len(list1)):
            mergedList += [list1[idx1]]
            idx1+=1
        elif(list1[idx1]>= list2[idx2] and idx2 < len(list2)):
            mergedList += [list2[idx2]]
            idx2 +=1

    if list1[-1] > list2[-1]:
        mergedList += [list1[-1]]
    else:
        mergedList += [list2[-1]]

    return mergedList

print(mergeList(list1, list2))