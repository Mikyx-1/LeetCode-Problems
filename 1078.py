# 1078: Occurrences after bigram

text1 = "alice is a good girl she is a good student"
first1 = 'a'
second1 = "good"

text2 = "we will we will rock you"
first2 = "we"
second2 = "will"


def occurencesAfterBigram(text, first, second):
    text = text.split(" ")
    ans = []
    for i in range(len(text)-1):
        if text[i] == first and text[i+1] == second:
            if i + 2 < len(text):
                ans.append(text[i+2])
    return ans

print(occurencesAfterBigram(text1, first1, second1))
print(occurencesAfterBigram(text2, first2, second2))