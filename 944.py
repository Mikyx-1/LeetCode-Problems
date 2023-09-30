# 944: Delete columns to make sorted
# Tested successfully 


strs1 = ['cba', 'daf', 'ghi']
strs2 = ['a', 'b']
strs3 = ['zyx', 'wvu', 'tsr']

def deleteColumnsToMakeSorted(strs):
    cnt = 0
    for i in range(len(strs[1])):
        for j in range(len(strs)-1):
            if ord(strs[j][i]) > ord(strs[j+1][i]):
                cnt+=1
                break

    return cnt

print(deleteColumnsToMakeSorted(strs1))
print(deleteColumnsToMakeSorted(strs2))
print(deleteColumnsToMakeSorted(strs3))

