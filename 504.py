# 504: Base 7 
# Tested successfully

num1 = 100
num2 = -7

def toBase7(num, res):
    if(num//7==0):
        return str(num%7) + res
    
    res = str(num%7) + res
    return toBase7(num//7, res)

def toBase7_2(num):
    if num<0:
        return "-" + toBase7(-num, "")
    return toBase7(num, "")

print(toBase7_2(num2))