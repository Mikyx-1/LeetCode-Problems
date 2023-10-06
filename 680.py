# 680: Valid Palindrome II
# Tested successfully

s1 = "aba"
s2 = "abca"
s3 = "abc"
s4 = "abcba"

def checkPalindrome(string):
    middleIdx = len(string)//2
    if string[:middleIdx+1] == string[middleIdx:][::-1]:
        return True
    return False

def validPalindromeII(string):
    if(checkPalindrome(string)): return True 
    
    for i in range(1, len(string)):
        if checkPalindrome(string[:i] + string[i+1:]):
            return True
        
    return False


print(validPalindromeII(s1))
print(validPalindromeII(s2))
print(validPalindromeII(s3))
print(validPalindromeII(s4))