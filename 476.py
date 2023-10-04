# 476: Number Complement
# Tested successfully

num1 = 5
num2 = 1

def toBin(num, res):
    if(num//2==0):
        return [num%2] + res
    
    res = [num%2] + res
    return toBin(num//2, res)

def toDec(bin):
    sum = 0
    for ith, b in enumerate(reversed(bin)):
        sum += b*pow(2, ith)
    return sum


def numCompliment(num):
    bin = toBin(num, [])
    for i in range(len(bin)):
        bin[i] = 1-bin[i]
    
    return toDec(bin)

print(numCompliment(num1))
print(numCompliment(num2))
