# 520: Detect Capital
# Tested successfully

word1 = "USA"
word2 = "flaG"


def detectCapital(word):
    # Capital letters: 65 -> 90
    if 97 < ord(word[0]) < 123:
        for w in word[1:]:
            if ~( 97 < ord(w) < 123):
                return False
        return True

     
    else:
        cnt = 1
        for w in word[1:]:
            if 64 < ord(w) < 90:
                cnt+=1
        if cnt==1 or cnt == len(word):
            return True
     
        return False
print(detectCapital(word1))
print(detectCapital(word2))