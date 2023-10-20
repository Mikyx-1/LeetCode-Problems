# 844: Backspace String Compare
# Tested successfully

s1 ="ab#c"
t1 = "ad#c"

s2 = "ab##"
t2 = "c#d#"

s3 = "a#c"
t3 = "b"

def findIdx(string, char):
    for ith, s in enumerate(string):
        if s == char:
            return ith
    return -1


def backspace(string):
    if findIdx(string, "#") == -1:
        return string
    
    sharpIdx = findIdx(string, "#")
    return backspace(string[:sharpIdx-1] + string[sharpIdx+1:])


def backspaceStringCompare(s1, t1):
    if backspace(s1) == backspace(t1):
        return True
    return False

print(backspaceStringCompare(s1, t1))
print(backspaceStringCompare(s2, t2))
print(backspaceStringCompare(s3, t3))