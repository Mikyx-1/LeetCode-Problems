# 7: Reverse Integer
# Tested successfully
def calculateLength(num):
    cnt = 1
    quotient = 0
    if(num<0):
        num = -num
    while True:
        quotient = num//10
        if quotient!=0:
            cnt += 1
            num /= 10
        else:
            break

    return cnt

def power(x, n):
    if n == 1:
        return x
    elif n == 0:
        return 1
    return x*power(x, n-1)



def reverseInteger(num):
    negative = True if num < 0 else False
    
    num_length = calculateLength(num)
    sum = 0
    if negative:
        num = -num
    
    for i in range(num_length):
        residual = int(num%10)
        sum += residual*power(10, num_length-1-i)
        num /= 10



    if negative and -sum > -pow(2, 31):
        return -sum
    elif negative == False and sum < pow(2, 31)-1:
        return sum
    else:
        return 0

# print(power(3, 2))
print(reverseInteger(-12345678910))


