# 202. Happy Number
# Tested Successfully


num1 = 19
num2 = 2



def happyNumber(num):
    if num//10 == 0:
        return False
    
    sum = 0
    remainder = 0
    while num > 0:
        sum += int(num%10)**2
        num /= 10

    if sum == 1:
        return True
    return happyNumber(sum)




print(happyNumber(87))
         