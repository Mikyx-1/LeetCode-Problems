# 387: First Unique Character in a string
# Tested successfully

s1 = "leetcode"
s2 = "loveleetcode"
s3 = "aabb"

def firstUniqueCharacterInAString(string):
    string_length = len(string)
    for i in range(0, string_length):
        break_flag = False
        for j in range(0, string_length):
            if string[i] == string[j] and i!= j:
                break_flag = True
                break
        if break_flag == True:
            continue
        return i
    
    return -1


print(firstUniqueCharacterInAString(s1))
print(firstUniqueCharacterInAString(s2))
print(firstUniqueCharacterInAString(s3))