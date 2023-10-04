# 507: Perfect Number
# Tested successfully

num1 = 28
num2 = 7


def isPerfectNumber(x):
    currSum = 1
    for i in range(2, x//2+1):
        if x%i==0:
            currSum += i
    
    if currSum == x:
        return True
    return False

print(isPerfectNumber(num1))
print(isPerfectNumber(num2))