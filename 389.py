# 389: Find the difference
# Tested successfully

s1 = "abcd"; t1="abcde"
s2 = ""; t2="y"

def findTheDifference(s, t):
    for t_item in t:
        cnt= 0
        for s_item in s:
            if s_item == t_item:
                cnt+=1

        if cnt == 0:
            return t_item
    

print(findTheDifference(s1, t1))

print(findTheDifference(s2, t2))
