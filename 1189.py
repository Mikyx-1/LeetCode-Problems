# 1189: Maximum number of balloons
# Tested successfully

text1 = "nlaebolko"
text2 = "loonbalxballpoon"
text3 = "leetcode"

def maximumNumberOfBalloons(text):
    counts = [0, 0, 0, 0, 0]         # b counts, a counts, l counts, o counts, n counts, s counts
    for t in text:
        if t == "b": counts[0]+=1
        elif t == "a": counts[1] +=1
        elif t == "l": counts[2] +=1
        elif t == "o": counts[3] +=1
        elif t == "n": counts[4] += 1

    numBalloons = 0
    while True:
        
        if counts[0] < 1 or counts[1] < 1 or counts[2] <2 or counts[3] < 2 or counts[4]<1:
            break
        counts[0] -=1
        counts[1] -=1
        counts[2] -= 2
        counts[3] -= 2
        counts[4] -= 1
        numBalloons += 1

    return numBalloons


print(maximumNumberOfBalloons(text1))
print(maximumNumberOfBalloons(text2))
print(maximumNumberOfBalloons(text3))