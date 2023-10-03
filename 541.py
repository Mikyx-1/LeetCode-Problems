# 541: Reverse String II
# Tested successfully

s1 = "abcdefghjk"
k1 = 2

s2 = "abcd"
k2 = 2


def reverseString(string, k):
    result = ""
    for i in range(0, len(string)):
        if(i%k==0):
            result += string[i*k:(i+1)*k][::-1]
        else:
            result += string[i*k:(i+1)*k]
    return result

print(reverseString(s1, k1))
print(reverseString(s2, k2))