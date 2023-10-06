# 557: Reverse Words in a String III
# Tested successfully

s1 = "Let's take LeetCode contest"
s2 = "God Ding"

def reverseIII(string):
    stringInList = string.split(" ")
    for i in range(len(stringInList)):
        stringInList[i] = stringInList[i][::-1]

    return " ".join(stringInList)

print(reverseIII(s1))
print(reverseIII(s2))
