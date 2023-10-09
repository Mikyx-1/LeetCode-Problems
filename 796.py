# 796: Rotate String
# Tested successfully

s1 = "abcde"
goal1 = "cdeab"

s2 = "abcde"
goal2 = "abced"


def rotateString(s, goal):
    stringInList = [item for item in s]
    for i in range(len(s) - 1):
        stringInList.insert(0, stringInList[-1])
        del stringInList[-1]
        if "".join(stringInList) == goal:
            return True
        
    return False

print(rotateString(s1, goal1))
print(rotateString(s2, goal2))