# 709: To Lower Case
# Tested successfully

s1 = "Hello"
s2 = "here"
s3 = "LOVELY"

def toLowerCase(string): 
    stringInList = [s for s in string]
    for i in range(len(string)):
        if 64 < ord(string[i]) < 91:
            stringInList[i] = chr(ord(string[i]) + 32)

    return "".join(stringInList)


print(toLowerCase(s1))
print(toLowerCase(s2))
print(toLowerCase(s3))