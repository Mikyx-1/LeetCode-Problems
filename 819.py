# 819: Most common word
# Tested successfully

import re

paragraph1 = "Bob hit a ball, the hit BALL flew far after it was hit."
banned1 = ["hit"]

paragraph2 = "a."
banned2 = []

pattern = r"[.?!,';]"

def mostCommonWord(paragraph, banned):
    paragraph = paragraph.lower()
    paragraph = re.sub(pattern, "", paragraph)
    hashMap = {}
    for word in paragraph.split(" "):
        if word not in hashMap and word not in banned:
            hashMap[word]  = 1
        elif word in hashMap and word not in banned:
            hashMap[word] += 1

    firstTime = True
    for key in hashMap.keys():
        if firstTime == True:
            maxOccurences = hashMap[key]
            maxWord = key
            firstTime = False
        if hashMap[key] > maxOccurences:
            maxOccurences = hashMap[key]
            maxWord = key
    return maxWord

print(mostCommonWord(paragraph1, banned1))
print(mostCommonWord(paragraph2, banned2))