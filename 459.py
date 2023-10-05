# 459: Repeated Substring Pattern
# Tested successfully

s1 = "abab"
s2 = "aba"
s3 = "abcabcabcabc"
s4 = "MyNameMyName"


def isRepeatedSubstringPattern(string):

    stringLength = len(string)

    # Step 1: Find the longest unique string
    hashMap = {}
    for i in range(stringLength):
        if string[i] not in hashMap:
            hashMap[string[i]] = [i]
        else:
            hashMap[string[i]].append(i)

    keys = list(hashMap.keys())
    values = list(hashMap.values())
    for value in values[1:]:
        if len(value) != len(values[0]):
            return False
        
        firstDistance = value[0] - values[0][0]
        for i in range(1, len(value[1:])):
            if value[i] - values[0][i] != firstDistance:
                return False
            
    return True

print(isRepeatedSubstringPattern(s3))
print(isRepeatedSubstringPattern(s2))
print(isRepeatedSubstringPattern(s1))
print(isRepeatedSubstringPattern(s4))