# 392: Is Subsequence
# Tested successfully

s1 = "abc"
t1 = "ahbgdc"

s2 = "axc"
t2 = "ahbgdc"


def isSubsequence(s, t):
    
    lastIdx = 0
    s_length = len(s)
    t_length = len(t)
    for i in range(s_length):
        findFlag = False
        for j in range(lastIdx, t_length) :
            if (s[i] == t[j]):
                lastIdx = j+1
                findFlag = True
                break

        if findFlag == False:
            return False
    
    return True

print(isSubsequence(s1, t1))
print(isSubsequence(s2, t2))