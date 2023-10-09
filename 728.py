# 728: Self Dividing Numbers
# Tested successfully

left1 = 1
right1 = 22

left2 = 47
right2 = 85

def checkSelfDividingNumber(num):
    dividingNum = num
    
    while(dividingNum>0):
        if dividingNum%10 == 0:
            return False

        if num % (dividingNum%10) != 0:
            return False
        
        dividingNum = dividingNum // 10
    return True

def selfDividingNumbers(left, right):
    ans = []
    for i in range(left, right+1):
        if checkSelfDividingNumber(i):
            ans.append(i)
    return ans

print(selfDividingNumbers(left1, right1))
print(selfDividingNumbers(left2, right2))