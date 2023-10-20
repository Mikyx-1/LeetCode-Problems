# 836: Rectangle Overlap
# Tested successfully

rec1 = [0, 0, 2, 2]
rec2 = [1, 1, 3, 3]

rec3 = [0, 0, 1, 1]
rec4 = [1, 0, 2, 1]

rec5 = [0, 0, 1, 1]
rec6 = [2, 2, 3, 3]

def checkOverlap(rec1, rec2):
    if rec1[0] > rec2[2] and rec1[1] > rec2[3]:
        return True
    
    if rec2[0] < rec1[2] and rec2[1] < rec1[3]:
        return True
    
    return False

print(checkOverlap(rec1, rec2))
print(checkOverlap(rec3, rec4))
print(checkOverlap(rec5, rec6))

