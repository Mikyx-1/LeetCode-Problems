# 1323: Maximum 69 number
# Tested successfully

num1 = 9669
num2 = 9996
num3 = 9999 

def maximum69Number(num):
    numList = [n for n in str(num)]
    for i in range(len(numList)):
        if numList[i] == "6":
            numList[i] = "9"
            break
    return int("".join(numList))

print(maximum69Number(num1))
print(maximum69Number(num2))
print(maximum69Number(num3))